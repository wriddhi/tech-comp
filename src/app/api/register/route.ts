import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const action = body.action as "join" | "create";
  const team = body.team as string;
  const category = body.category;

  delete body?.action;
  delete body?.team;
  delete body?.category;

  // Does user already exist?
  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", body.id);

  // Return error if user search is unsuccessful
  if (error) {
    return NextResponse.json({
      message: "There was some problem registering you",
    });
  }

  // Return error if user already exists
  if (user?.length !== 0) {
    return NextResponse.json({ message: "User already exists" });
  }

  // If user doesn't exist, we can proceed with registration

  // User is joining a team
  if (action === "join") {
    // Check if team exists
    const { data, error } = await supabase
      .from("teams")
      .select("*")
      .eq("name", team);

    // Return error if team search is unsuccessful
    if (error) {
      return NextResponse.json({
        message: "There was some problem joining the team",
      });
    }

    // Return error if team doesn't exist
    if (data?.length === 0) {
      return NextResponse.json({ message: "No team with that name exists" });
    }

    // Return error if team is full
    if (data[0].members?.length == 5) {
      return NextResponse.json({ message: "Team is full" });
    }

    if (data[0].members.includes(body.id)) {
      return NextResponse.json({
        message: "You are already a member of this team",
      });
    }

    // User does not exist yet,
    const { data: user, error: userError } = await supabase
      .from("users")
      .insert(body);

    if (userError) {
      return NextResponse.json({
        message: "There was some problem registering you",
      });
    }

    const { data: teamJoin, error: teamError } = await supabase
      .from("teams")
      .update({ members: [...data[0].members, body.id] })
      .eq("name", team);
    const { data: userJoin, error: userJoinError } = await supabase
      .from("users")
      .update({ team: team })
      .eq("id", body.id);

    if (teamError || userJoinError) {
      return NextResponse.json({
        message: "There was some problem joining the team",
      });
    }
  } else {
    const { data, error } = await supabase
      .from("teams")
      .select("*")
      .eq("name", team);

    if (error) {
      return NextResponse.json({
        message: "There was some problem creating the team",
      });
    }

    if (data?.length !== 0) {
      return NextResponse.json({
        message: "A team with that name already exists",
      });
    }

    const { data: user, error: userError } = await supabase
      .from("users")
      .insert(body);

    if (userError) {
      return NextResponse.json({
        message: "There was some problem registering you",
      });
    }

    const { data: teamCreate, error: teamError } = await supabase
      .from("teams")
      .insert({
        name: team,
        members: [body.id],
        leader: body.id,
        category: category,
      });
    const { data: userCreate, error: userCreateError } = await supabase
      .from("users")
      .update({ team: team })
      .eq("id", body.id);

    if (teamError || userCreateError) {
      return NextResponse.json({
        message: "There was some problem creating the team",
      });
    }
  }

  return NextResponse.json({ message: "Registration Successful" });
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "Successful" });
}

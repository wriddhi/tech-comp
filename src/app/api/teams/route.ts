import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    const {data: teams, error} = await supabase.from("teams").select("*");

    if (error) {
        return NextResponse.json({message: "There was some problem fetching the teams"});
    }

    return NextResponse.json(teams);

}

"use client";

import { useEffect, useState } from "react";

interface Team {
  name: string;
  members: string[];
  leader: string;
  category: string;
}


export default function TeamDetails() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [search, setSearch] = useState<string>("");

  const filteredTeams = teams
    ? teams.filter((team) =>
        team.name.toLowerCase().startsWith(search.toLowerCase())
      )
    : [];

  useEffect(() => {
    fetch("/api/teams", { cache: "no-store", next: { revalidate: 0 } })
      .then((res) => res.json())
      .then((data: Team[]) => setTeams(data));
  }, []);

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bruno capitalize">Team Details</h1>
      <section className="flex flex-col gap-10 w-5/6 mx-auto my-20">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search"
          className="bg-white/10 text-white rounded-lg p-4 outline outline-1 focus:outline-2 w-5/6 mx-auto"
          value={search}
        />
        <table className="my-10 rounded-2xl overflow-hidden outline outline-1 w-5/6 mx-auto">
          <thead>
            <tr>
              <th className="border border-black bg-white text-black px-4 py-2">
                Team Name
              </th>
              <th className="border border-black bg-white text-black px-4 py-2">
                Leader
              </th>
              <th className="border border-black bg-white text-black px-4 py-2">
                Members
              </th>
              <th className="border border-black bg-white text-black px-4 py-2">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTeams.length >= 1 ? (
              filteredTeams.map((team) => (
                <tr
                  key={team.name}
                  className="border border-white border-solid "
                >
                  <td className="border border-white border-solid px-4 py-2">
                    {team.name}
                  </td>
                  <td className="border border-white border-solid px-4 py-2">
                    {team.leader}
                  </td>
                  <td className="border border-white border-solid px-4 py-2">
                    {team.members.length}/5
                  </td>
                  <td className="border border-white border-solid px-4 py-2">
                    {team.category}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border border-white border-solid text-center">
                <td className="border border-white border-solid px-4 py-2">
                  {" "}
                  -{" "}
                </td>
                <td className="border border-white border-solid px-4 py-2">
                  {" "}
                  -{" "}
                </td>
                <td className="border border-white border-solid px-4 py-2">
                  {" "}
                  -{" "}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}

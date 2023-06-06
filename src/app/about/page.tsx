export default function About() {
  const categories = [
    {
      title: "Coding Competition",
      description: (
        <>
          This event tests the participants&apos; coding skills and problem-solving
          abilities. It provides an excellent opportunity for students to
          showcase their technical expertise and demonstrate their programming
          prowess. The coding competition will be organised on{" "}
          <a className="text-emerald-400" href="https://geeksforgeeks.org/">
            GeeksForGeeks
          </a>{" "}
          platform. So, to participate in the competition students must have a
          Geeksforgeeks account.
        </>
      ),
    },

    {
      title: "Model Display",
      description: (
        <>
          Participants get the chance to showcase their innovative models and
          prototypes. This segment encourages students to think outside the box
          and apply their theoretical knowledge to practical applications. It
          allows them to demonstrate their leadership skills, as well as their
          abilities to communicate and present ideas effectively. Students with
          maximum 5 members team or minimum 2 members team can participate. They
          have to register themselves using the register tab. Students have to
          make a software or hardware model and have to show it on campus. The
          topic is :<b className="text-amber-400"> Sustainable technology</b>
        </>
      ),
    },
    {
      title: "Poster Presentation",
      description: (
        <>
          In this segment, students present their ideas and projects through
          visually appealing posters. This event not only fosters creativity but
          also promotes effective communication skills and the ability to
          present information in a concise and engaging manner. Students with
          maximum 5 members team or minimum 2 members team can participate in
          this event. They have to register themselves using the register tab.
          They have to make a poster and show it on campus. The topic is:
          <b className="text-cyan-400"> Sustainable technology</b>
        </>
      ),
    },
  ];

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bruno capitalize">Tech Comp</h1>
      <p className="px-20 mt-20 text-lg">
        Tech Comp is a three-way hybrid competition organized by{" "}
        <strong>JIS University </strong>
        and <strong>Programado.</strong> It offers an innovative platform for
        students to grow and enhance their learning opportunities. Participating
        students have the chance to win exciting prizes, including cash rewards,
        certificates, goodies, and other prestigious awards. The competition is
        divided into three parts, each with its own set of awards and prize
        money. These include:
      </p>
      <ol className="list-decimal list-inside text-2xl px-20">
        {categories.map((category) => (
          <li key={category.title} className="p-4">
            <h3 className="text-2xl font-bruno text-fuchsia-400 inline">
              {category.title}
            </h3>
            <p className="text-lg pl-7">{category.description}</p>
          </li>
        ))}
      </ol>
      <p className="px-20 mt-20 text-lg">
        Tech Comp goes beyond technical skills; it focuses on the holistic
        development of participants. The competition provides a unique learning
        experience that enhances not only technical proficiency but also
        leadership skills, communication skills, and presentation abilities.
        This groundbreaking event marks a new era in the world of competitions,
        offering students an unparalleled platform to learn, grow, and shine.
        Join us and be a part of this extraordinary opportunity!
      </p>
      <h2 className="text-5xl mt-20">Schedule</h2>
      <table className="my-10 rounded-2xl overflow-hidden outline outline-1 w-5/6 x-auto">
        <thead>
          <tr>
            <th className="border border-black bg-white text-black px-4 py-2">
              Event No.
            </th>
            <th className="border border-black bg-white text-black px-4 py-2">
              Event
            </th>
            <th className="border border-black bg-white text-black px-4 py-2">
              Date
            </th>
            <th className="border border-black bg-white text-black px-4 py-2">
              Time
            </th>
            <th className="border border-black bg-white text-black px-4 py-2">
              Launch
            </th>
            <th className="border border-black bg-white text-black px-4 py-2">
              Speakers
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-white border-solid ">
            <td className="border border-white border-solid px-4 py-2">1.</td>
            <td className="border border-white border-solid px-4 py-2">
              Coding Competition
            </td>
            <td className="border border-white border-solid px-4 py-2">
              8th June, 2023
            </td>
            <td className="border border-white border-solid px-4 py-2">
              11:00 A.M.
            </td>
            <td className="border border-white border-solid px-4 py-2">
              Coming Soon...
            </td>
            <td className="border border-white border-solid px-4 py-2">
              Coming Soon...
            </td>
          </tr>
          <tr className="border border-white border-solid ">
            <td className="border border-white border-solid px-4 py-2">2.</td>
            <td className="border border-white border-solid px-4 py-2">
              Model Display
            </td>
            <td className="border border-white border-solid px-4 py-2">
              9th June, 2023
            </td>
            <td className="border border-white border-solid px-4 py-2">
              11:00 A.M.
            </td>
            <td className="border border-white border-solid px-4 py-2">
              Coming Soon...
            </td>
            <td className="border border-white border-solid px-4 py-2">
              Coming Soon...
            </td>
          </tr>
          <tr className="border border-white border-solid ">
            <td className="border border-white border-solid px-4 py-2">3.</td>
            <td className="border border-white border-solid px-4 py-2">
              Poster Presentation
            </td>
            <td className="border border-white border-solid px-4 py-2">
              9th June, 2023
            </td>
            <td className="border border-white border-solid px-4 py-2">
              11:00 A.M.
            </td>
            <td className="border border-white border-solid px-4 py-2">
              Coming Soon...
            </td>
            <td className="border border-white border-solid px-4 py-2">
              Coming Soon...
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

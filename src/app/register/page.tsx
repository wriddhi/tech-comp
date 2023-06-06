import Link from "next/link";

type Event = {
  category: string;
  description: string;
  href: string;
}

const EventCard: React.FC<Event> = ({ category, description, href }) => {
  return (
    <div className="flex flex-col justify-between items-start gap-10 bg-white/5 hover:bg-white/10 border border-white/10 transition-all p-10">
      <h3 className="text-3xl uppercase ">
        {category}
      </h3>
      <p className="text-lg">{description}</p>
      <Link className="bg-white text-black font-bold p-2 rounded-lg" href={href}>Register Now &gt;</Link>
    </div>
  );
}


export default function Register() {

  const events: Event[] = [
    {
      category: "Poster Presentation",
      description: "Present your research on a poster to a panel of judges",
      href: "/register/poster",
    },
    {
      category: "Model Display",
      description: "Display your model to a panel of judges",
      href: "/register/model",
    },
    {
      category: "Coding Competition",
      description: "Compete in a coding competition to test your skills",
      href: "/register/coding",
    }
  ];

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bruno capitalize">Register</h1>
      <section className="grid grid-cols-3 gap-10 w-5/6 mx-auto my-20">
        {events.map((event) => (
          <EventCard key={event.category} {...event} />
        ))}
      </section>
    </main>
  );
}

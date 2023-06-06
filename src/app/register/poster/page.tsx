"use client"

type FieldsType = {
  label: string;
  name: string;
  type: "text" | "email" | "password" | "number" | "checkbox" | "radio";
  placeholder?: string;
  value?: string;
  required: boolean;
  min?: number;
  max?: number;
  validation?: (value: string) => boolean;
};

const fields: FieldsType[] = [
  {
    label: "Your college ID",
    name: "id",
    type: "text",
    placeholder: "JISU/20XX/XXXX",
    required: true,
  },
  {
    label: "Your name",
    name: "name",
    type: "text",
    placeholder: "John Doe",
    required: true,
  },
  {
    label: "Your email",
    name: "email",
    type: "email",
    placeholder: "johndoe@mail.com",
    required: true,
  },
  {
    label: "Your phone number",
    name: "phone",
    type: "number",
    placeholder: "0123456789",
    required: true,
  },
  {
    label: "Your year of study",
    name: "year",
    type: "number",
    min: 1,
    max: 5,
    placeholder: "1",
    required: true,
  },
  {
    label: "Your Department",
    name: "department",
    type: "text",
    placeholder: "Computer Science and Engineering  ",
    required: true,
  },
  {
    label: "Your college name",
    name: "college",
    type: "text",
    placeholder: "JIS University",
    required: true,
  },
  {
    label: "Your team name",
    name: "team",
    type: "text",
    placeholder: "Team 1",
    required: true,
  },
];

export default function Poster() {

    const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        
        const payload = {
            id: data.get("id"),
            name: data.get("name"),
            email: data.get("email"),
            phone: data.get("phone"),
            year: data.get("year"),
            department: data.get("department"),
            college: data.get("college"),
            team: data.get("team"),
            action: data.get("action"),
            category: "poster",
        }

        console.log(payload)

        const res = await fetch('/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        })

        const json = await res.json()

        alert(json.message)
    }

  return (
    <main className="w-full flex flex-col justify-center items-center gap-10">
      <h1 className="text-5xl capitalize">Register for Poster Presentation</h1>

      <form onSubmit={handleSubmission} className="w-2/3 bg-white/10 rounded-2xl flex flex-col gap-2 p-10">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label htmlFor={field.name}>{field.label}</label>
            <input id={field.name} {...field} className="bg-black text-white rounded-lg p-2" />
          </div>
        ))}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="action">Join or create a team</label>
          <div className="w-full">
            <input
              required
              name="action"
              type="radio"
              value="join"
              className="bg-black text-white rounded-lg p-2 mr-4"
            />
            <label htmlFor="action">Join <i className="ml-auto">(Enter the team name provided by your leader to join as a member)</i></label>
          </div>
          <div className="w-full">
            <input
              required
              name="action"
              type="radio"
              value="create"
              className="bg-black text-white rounded-lg p-2 mr-4"
            />
            <label htmlFor="action">Create <i className="ml-auto">(Enter a new unique team name to create a new team as a leader)</i></label>
          </div>
        </div>
        <button
          className="bg-white text-black font-bold p-2 rounded-lg"
          type="submit"
        >
          Register Now &gt;
        </button>
      </form>
    </main>
  );
}

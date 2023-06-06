"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="w-full h-full flex justify-between items-center">
      {/* Gif */}
      <div className="absolute inset-0 overflow-hidden mx-auto my-auto ml-56 flex flex-col justify-center items-center -z-10">
        <Image
          className="translate-y-10 -rotate-[70deg]"
          alt=""
          src={"/blob-2.gif"}
          width={175}
          height={175}
        />
        <Image
          className="-translate-y-1/3"
          alt=""
          src={"/blob-1.gif"}
          width={400}
          height={400}
        />
      </div>

      {/* Hero Content */}
      <section className="w-3/4 font-semibold flex flex-col p-16 justify-start items-start h-full">
        <h1 className="font-bold text-9xl font-bruno text-white  tracking-wider">
          Tech Comp
        </h1>
        <p className="text-2xl mb-10 font-mono font-bold bg-gradient-to-r text-transparent from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text">
          &lt; A three-way hybrid competition / &gt;
        </p>
        <div className=" w-2/3 rounded-lg overflow-hidden">
          <div className="w-full h-11 bg-slate-900 flex justify-start items-center space-x-1.5 px-3">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
          <div className="text-xl cursor-default font-mono text-cyan-400 group bg-[#211a34] p-6 ">
            {"{"}
            <TypeAnimation
              sequence={[
                "1. Poster Presentation",
                1000,
                "2. Model Display (Hardware/Software)",
                1000,
                "3. Coding Competition",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-white group-hover:hidden flex ml-1 pl-8 border-dashed border-l-2 border-slate-500"
            />

            <span className="text-white group-hover:flex hidden ml-1 pl-8 border-dashed border-l-2 border-slate-500">
              <ol className="list-decimal list-inside">
                <li>Poster Presentation</li>
                <li>Model Display (Hardware/Software)</li>
                <li>Coding Competition</li>
              </ol>
            </span>
            {"}"}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <div className="ml-auto mt-[18rem] mb-auto text-4xl w-1/4 border-l-4 p-10 animate-pulse">
        Create something that will help your community
      </div>
    </main>
  );
}

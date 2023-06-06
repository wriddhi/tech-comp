"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className={`w-full flex justify-between items-center`}>
          <a href={'/'}>
          <Image src={'/header.svg'} alt='JISU X PROGRAMADO' width={350} height={350} />
          </a>
          <nav>
            <ul className={`text-xl flex items-center gap-10 px-10 uppercase`}>
              <li className="hover:border-b-2">
                <a href={'/about'}>About</a>
              </li>
              <li className="hover:border-b-2">
                <a href={'/team-details'}>Team Details</a>
              </li>
              <li className="hover:border-b-2">
                <a href={'/register'}>Register</a>
              </li>
            </ul>
          </nav>
        </header>
    )
}
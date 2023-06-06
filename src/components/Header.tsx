import Image from "next/image"
import Link from "next/link"


export default function Header() {
    return (
        <header className={`w-full flex justify-between items-center`}>
          <Link href={'/'} scroll={false}>
          <Image src={'/header.svg'} alt='JISU X PROGRAMADO' width={400} height={400} />
          </Link>
          <nav>
            <ul className={`text-xl flex items-center gap-10 px-10 uppercase`}>
              <li className="hover:border-b-2">
                <Link scroll={false} href={'/about'}>About</Link>
              </li>
              <li className="hover:border-b-2">
                <Link scroll={false} href={'/team-details'}>Team Details</Link>
              </li>
              <li className="hover:border-b-2">
                <Link scroll={false} href={'/register'}>Register</Link>
              </li>
            </ul>
          </nav>
        </header>
    )
}
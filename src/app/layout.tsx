import './globals.css'
import { Inter, Jost, Chivo_Mono, Bruno_Ace_SC } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jost = Jost({ subsets: ['latin'], variable: '--font-jost' })
const chivo_mono = Chivo_Mono({ subsets: ['latin'], variable: '--font-chivo-mono' })
const bruno_ace_sc = Bruno_Ace_SC({ weight: "400", subsets: ['latin'], variable: '--font-bruno-ace-sc' })

export const metadata = {
  title: 'Tech Comp',
  description: 'Developed by Programado, the JISU coding club',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scrollbar-none scroll-smooth" lang="en">
      <body className={`font-jost bg-black text-white w-full h-screen flex flex-col justify-start items-start ${chivo_mono.variable} ${inter.variable} ${jost.variable} ${bruno_ace_sc.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  )
}

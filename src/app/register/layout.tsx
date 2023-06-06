"use client"

export const metadata = {
    title: 'Register',
    description: 'Register for Tech Comp, the 3-way hybid competition',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html className="bg-black scrollbar-none scroll-smooth" lang="en">
        <body className={`font-jost bg-black text-white w-full h-screen flex flex-col justify-start items-start`}>
          {children}
        </body>
      </html>
    )
  }
  
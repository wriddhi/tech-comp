export const metadata = {
  title: 'Team Details',
  description: 'Developed by Programado, the JISU coding club',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scrollbar-none scroll-smooth" lang="en">
      <body className={`font-jost bg-black text-white w-full h-screen flex flex-col justify-start items-start`}>
        {children}
      </body>
    </html>
  )
}

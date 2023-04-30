import "@/app/globals.css"
import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
export const metadata = {
  title: 'muzik',
  description: 'Hear whatever  you want',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="bg-gray-50" lang="en">
      <body>
        <NavBar/>
        <main className="m-4">{children}</main>
        <Footer/>
      </body>
    </html>
  )
}

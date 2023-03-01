import Head from 'next/head'
import './globals.css'

export const metadata = {
  title: 'F.A.Q',
  description: 'F.A.Q MOVI ID',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/movi.png" />
      </Head>
      <body>
        {children}
        </body>
    </html>
  )
}

import Head from 'next/head'
import './globals.css'

export const metadata = {
  title: 'FAQ',
  description: 'FAQ MOVI ID',
  
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

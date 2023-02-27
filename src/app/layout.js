import './globals.css'

export const metadata = {
  title: 'F.A.Q',
  description: 'F.A.Q MOVI ID',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

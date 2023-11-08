import './globals.css'

export const metadata = {
  title: 'TBD Later',
  description: 'To be decided later'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

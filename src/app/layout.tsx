import './globals.css'

export const metadata = {
  title: 'outdoorsy-task',
  description: 'outdoorsy-task description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

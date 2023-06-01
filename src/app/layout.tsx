import { Providers } from '@/app/providers'
import { Navbar } from '@/layout/navbar'

export const metadata = {
  title: 'Appointment Management System',
  description: 'A practical test for VAI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}

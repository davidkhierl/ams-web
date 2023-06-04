import { AppProvider } from '@/app/app-provider'

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
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}

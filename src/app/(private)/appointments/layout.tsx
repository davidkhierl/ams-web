import { ReactNode } from 'react'

export interface PublicLayoutProps {
  children?: ReactNode
}

export const metadata = {
  title: 'Appointments | Appointment Management System',
  description: 'Appointments',
}

export default function AppointmentsLayout({ children }: PublicLayoutProps) {
  return <>{children}</>
}

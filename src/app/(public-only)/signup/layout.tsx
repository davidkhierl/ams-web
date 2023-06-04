import { ReactNode } from 'react'

export interface PublicLayoutProps {
  children?: ReactNode
}

export const metadata = {
  title: 'Patient Sign Up | Appointment Management System',
  description: 'Sign up page',
}

export default function SignInLayout({ children }: PublicLayoutProps) {
  return <>{children}</>
}

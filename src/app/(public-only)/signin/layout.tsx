import { ReactNode } from 'react'

export interface PublicLayoutProps {
  children?: ReactNode
}

export const metadata = {
  title: 'Sign in | Appointment Management System',
  description: 'Sign in page',
}

export default function SignInLayout({ children }: PublicLayoutProps) {
  return <>{children}</>
}

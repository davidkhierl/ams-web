import { PublicLayoutClient } from '@/app/(public)/public-layout-client'
import { ReactNode } from 'react'

export interface PublicLayoutProps {
  children?: ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return <PublicLayoutClient>{children}</PublicLayoutClient>
}

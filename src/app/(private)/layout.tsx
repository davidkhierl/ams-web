import { PrivateLayoutClient } from '@/app/(private)/private-layout-client'
import { ReactNode } from 'react'

export interface PublicLayoutProps {
  children?: ReactNode
}

export default function PrivateLayout({ children }: PublicLayoutProps) {
  return <PrivateLayoutClient>{children}</PrivateLayoutClient>
}

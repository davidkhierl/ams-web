import { PrivateAuth } from '@/app/(private)/private-auth'
import { PrivateLayoutClient } from '@/app/(private)/private-layout-client'
import { ReactNode } from 'react'

export interface PublicLayoutProps {
  children?: ReactNode
}

export default function PrivateLayout({ children }: PublicLayoutProps) {
  return (
    <PrivateAuth>
      <PrivateLayoutClient>{children}</PrivateLayoutClient>
    </PrivateAuth>
  )
}

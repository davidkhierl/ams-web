import { PublicOnlyLayoutClient } from '@/app/(public-only)/public-only-layout-client'
import { ReactNode } from 'react'

export interface PublicOnlyLayoutProps {
  children?: ReactNode
}

export default function PublicOnlyLayout({ children }: PublicOnlyLayoutProps) {
  return <PublicOnlyLayoutClient>{children}</PublicOnlyLayoutClient>
}

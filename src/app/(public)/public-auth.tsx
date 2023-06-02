'use client'

import { useSessionStore } from '@/store/session.store'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

export interface PublicAuthProps {
  children?: ReactNode
}

export function PublicAuth({ children }: PublicAuthProps) {
  const access_token = useSessionStore((state) => state.access_token)

  const { push } = useRouter()

  useEffect(() => {
    if (access_token) push('/appointments')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}

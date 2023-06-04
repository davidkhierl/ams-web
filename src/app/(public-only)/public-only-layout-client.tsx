'use client'

import { AppBarPublicOnly } from '@/layout/app-bar-public-only'
import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'

export interface PublicOnlyLayoutClientProps {
  children?: ReactNode
}

export function PublicOnlyLayoutClient({
  children,
}: PublicOnlyLayoutClientProps) {
  return (
    <>
      <AppBarPublicOnly />
      <Container maxW="container.xl" mt={10}>
        {children}
      </Container>
    </>
  )
}

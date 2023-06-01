'use client'

import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'

export interface PublicLayoutClientProps {
  children?: ReactNode
}

export function PublicLayoutClient({ children }: PublicLayoutClientProps) {
  return (
    <Container maxW="container.xl" mt={10}>
      {children}
    </Container>
  )
}

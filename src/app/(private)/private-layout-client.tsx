'use client'

import { CreateAppointmentDrawer } from '@/components/create-appointment-drawer'
import { AppBarPrivate } from '@/layout/app-bar-private'
import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'

export interface PublicLayoutClientProps {
  children?: ReactNode
}

export function PrivateLayoutClient({ children }: PublicLayoutClientProps) {
  return (
    <>
      <AppBarPrivate />
      <Container maxW="container.xl" mt={10}>
        {children}
      </Container>
      <CreateAppointmentDrawer />
    </>
  )
}

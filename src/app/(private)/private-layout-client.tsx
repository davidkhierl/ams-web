'use client'

import { CreateAppointmentDrawer } from '@/components/create-appointment-drawer'
import { PrivateNavbar } from '@/layout/private-navbar'
import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'

export interface PublicLayoutClientProps {
  children?: ReactNode
}

export function PrivateLayoutClient({ children }: PublicLayoutClientProps) {
  return (
    <>
      <PrivateNavbar />
      <Container maxW="container.xl" mt={10}>
        {children}
      </Container>
      <CreateAppointmentDrawer />
    </>
  )
}

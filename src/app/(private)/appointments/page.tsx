'use client'

import { AppointmentsGrid } from '@/app/(private)/appointments/appointments-grid'
import { api } from '@/services/api'
import { useCreateAppointmentDrawerStore } from '@/store/create-appointment-drawer.store'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { GoPlus } from 'react-icons/go'

export default function AppointmentsPage() {
  const toggleIsCreateAppointmentDrawerOpen = useCreateAppointmentDrawerStore(
    (state) => state.toggleIsCreateAppointmentDrawerOpen
  )

  const { data, isLoading } = useQuery({
    queryKey: ['users', 'current_user'],
    queryFn: async () => {
      const res = await api.get('/users/me')
      return res.data
    },
  })

  return (
    <Box>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        gap={4}
        justifyContent="space-between">
        <Heading>Appointments</Heading>
        {!isLoading && data.type === 'PATIENT' && (
          <Button
            colorScheme="green"
            variant="solid"
            leftIcon={<GoPlus />}
            onClick={() => toggleIsCreateAppointmentDrawerOpen(true)}>
            New
          </Button>
        )}
      </Flex>
      <AppointmentsGrid />
    </Box>
  )
}

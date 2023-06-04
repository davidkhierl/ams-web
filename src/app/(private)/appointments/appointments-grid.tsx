'use client'

import { AppointmentCard } from '@/app/(private)/appointments/appointment-card'
import { AppointmentsCardSkeleton } from '@/app/(private)/appointments/appointments-card-skeleton'
import { api } from '@/lib/api'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

export function AppointmentsGrid() {
  const { data, isLoading } = useQuery({
    queryKey: ['appointments'],
    queryFn: async () => {
      const res = await api.get('/appointments')
      return res.data
    },
  })

  const { data: user } = useQuery({
    queryKey: ['users', 'current_user'],
    queryFn: async () => {
      const res = await api.get('/users/me')
      return res.data
    },
  })

  return (
    <Box mt={10}>
      {isLoading && <AppointmentsCardSkeleton />}
      {!isLoading && !data.length && (
        <Flex>
          <Text fontSize={{ md: '2xl' }}>No appointments 🫡</Text>
        </Flex>
      )}
      {!isLoading && data.length > 0 && (
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={6}>
          {data.map((appointment: any) => (
            <AppointmentCard
              key={appointment.id}
              name={
                user.type === 'DOCTOR' || user.type === 'ADMIN'
                  ? appointment.patient.name
                  : `Dr. ${appointment.doctor.name}`
              }
              startDate={appointment.start_date}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  )
}

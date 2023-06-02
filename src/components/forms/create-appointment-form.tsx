import { DoctorSelect } from '@/components/doctor-select'
import { api } from '@/services/api'
import { useCreateAppointmentDrawerStore } from '@/store/create-appointment-drawer.store'
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  SimpleGrid,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import dayjs from 'dayjs'
import union from 'lodash/union'
import { useMemo, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export function CreateAppointmentForm() {
  const [hasError, setHasError] = useState(false)

  const queryClient = useQueryClient()

  const toggleIsCreateAppointmentDrawerOpen = useCreateAppointmentDrawerStore(
    (state) => state.toggleIsCreateAppointmentDrawerOpen
  )

  const [payload, setPayload] = useState<{
    doctor_id?: string
    patient_id?: string
    day?: Date | null
    start_date?: Date
    end_date?: Date
  }>()

  const { data: user } = useQuery({
    queryKey: ['users', 'current_user'],
    queryFn: async () => {
      const res = await api.get('/users/me')
      return res.data
    },
  })

  const { data: doctors, isLoading } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await api.get('/users/doctors')
      return res.data
    },
  })

  const slotOptions = useMemo(() => {
    if (!payload?.day) return

    const slots = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map(
      (hour) => {
        const slot = dayjs(payload.day).add(hour, 'h').toDate()

        return {
          value: slot,
          text: `${dayjs().set('h', hour).format('ha')} to ${dayjs()
            .set('h', hour + 1)
            .format('ha')}`,
        }
      }
    )

    return slots
  }, [payload?.day])

  const mutation = useMutation({
    mutationKey: ['appointments'],
    mutationFn: (data: {
      doctor_id?: string
      patient_id?: string
      day?: Date | null
      start_date?: Date
      end_date?: Date
    }) => {
      return api.post('/appointments', data)
    },
    onSuccess: (result, variables, context: any) => {
      queryClient.setQueryData(['appointments'], (old: any) => {
        return union(old, [result.data])
      })
    },
  })

  const handleSubmit = async () => {
    try {
      await mutation.mutateAsync({
        patient_id: user.id,
        doctor_id: payload?.doctor_id,
        start_date: payload?.start_date,
        end_date: dayjs(payload?.start_date).add(1, 'h').toDate(),
      })

      toggleIsCreateAppointmentDrawerOpen(false)
    } catch (error) {
      if (error instanceof AxiosError) console.log(error.message)

      setHasError(true)
    }
  }

  return (
    <>
      {isLoading && (
        <>
          <Skeleton h="10" rounded="md" mb={4} />
          <Skeleton h="40" rounded="md" mb={4} />
        </>
      )}
      {!isLoading && doctors.length === 0 && (
        <Text>No available doctors at the moment 😞</Text>
      )}
      {!isLoading && doctors.length > 0 && (
        <Box>
          <VStack gap={4} mb={4}>
            {hasError && (
              <Alert status="error" rounded="md">
                <AlertIcon />
                <span>Appointment schedule not available</span>
              </Alert>
            )}
            <FormControl w="full">
              <FormLabel>Choose Doctor</FormLabel>
              <DoctorSelect
                onChange={(e) => {
                  setPayload((prev) => ({
                    ...prev,
                    doctor_id: e.target.value,
                  }))
                }}
                value={payload?.doctor_id}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Select Date</FormLabel>
              <Calendar
                onChange={(day) =>
                  setPayload((prev) => ({
                    ...prev,
                    day: new Date(day?.toString()!),
                  }))
                }
                value={payload?.day}
                minDate={new Date()}
              />
            </FormControl>
            <SimpleGrid columns={{ base: 1, md: 2 }} w="full" gap={4}>
              {slotOptions?.map((slot) => (
                <Button
                  key={slot.text}
                  variant="outline"
                  bgColor={
                    slot.value === payload?.start_date ? 'green.500' : undefined
                  }
                  onClick={() => {
                    setPayload((prev) => ({
                      ...prev,
                      start_date: slot.value,
                    }))
                  }}>
                  {slot.text}
                </Button>
              ))}
            </SimpleGrid>
            <Button
              colorScheme="green"
              w="full"
              isDisabled={!payload?.doctor_id || !payload.start_date}
              isLoading={mutation.isLoading}
              onClick={handleSubmit}>
              Create
            </Button>
          </VStack>
        </Box>
      )}
    </>
  )
}

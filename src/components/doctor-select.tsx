import { api } from '@/lib/api'
import { Select, SelectProps, Skeleton, forwardRef } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

export const DoctorSelect = forwardRef<SelectProps, 'select'>((props, ref) => {
  const { data, isLoading } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await api.get('/users/doctors')
      return res.data
    },
  })

  return (
    <Skeleton isLoaded={!isLoading}>
      <Select ref={ref} placeholder="Select doctor" {...props}>
        {data?.map((doctor: any) => (
          <option key={doctor.id} value={doctor.id}>
            {doctor.name}
          </option>
        ))}
      </Select>
    </Skeleton>
  )
})

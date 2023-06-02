'use client'

import animationData from '@/lib/lottie-files/spinner.json'
import { api } from '@/services/api'
import { useSessionStore } from '@/store/session.store'
import { Box, Center, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import Lottie from 'lottie-react'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

export interface PrivateAuthProps {
  children?: ReactNode
}

export function PrivateAuth({ children }: PrivateAuthProps) {
  const access_token = useSessionStore((state) => state.access_token)

  const { push } = useRouter()

  useEffect(() => {
    if (!access_token) push('/signin')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { data, isLoading } = useQuery({
    queryKey: ['users', 'current_user'],
    queryFn: async () => {
      const res = await api.get('/users/me')
      return res.data
    },
  })

  return (
    <>
      {!data || isLoading ? (
        <Box>
          <Center h="100vh">
            <Box boxSize={36}>
              <Lottie animationData={animationData} loop />
              <Text textAlign="center">Please wait...</Text>
            </Box>
          </Center>
        </Box>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

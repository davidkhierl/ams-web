'use client'

import animationData from '@/assets/lottie-files/spinner.json'
import { getCurrentUser } from '@/services/get-current-user'
import { useSessionStore } from '@/store/session.store'
import { Box, Container } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import Lottie from 'lottie-react'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useState } from 'react'

export interface PublicAuthProps {
  children?: ReactNode
}

export function PublicOnlyAuth({ children }: PublicAuthProps) {
  const [isRedirecting, setIsRedirecting] = useState(false)

  const access_token = useSessionStore((state) => state.access_token)

  const { push } = useRouter()

  const pathName = usePathname()

  const { data, isLoading, fetchStatus } = useQuery(['users', 'current_user'], {
    queryFn: async () => {
      const user = await getCurrentUser()

      setIsRedirecting(true)

      // push('/appointments')

      return user
    },
    enabled: !!access_token,
  })

  if ((isLoading && fetchStatus !== 'idle') || isRedirecting)
    return (
      <Container
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Box boxSize={36}>
          <Lottie animationData={animationData} loop />
        </Box>
      </Container>
    )

  return <>{children}</>
}

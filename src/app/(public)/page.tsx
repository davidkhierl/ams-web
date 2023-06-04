'use client'

import { AppBarPublic } from '@/layout/app-bar-public'
import { getCurrentUser } from '@/services/get-current-user'
import { useSessionStore } from '@/store/session.store'
import { Link } from '@chakra-ui/next-js'
import { Box, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

export default function HomePage() {
  const access_token = useSessionStore((state) => state.access_token)

  useQuery(['users', 'current_user'], {
    queryFn: getCurrentUser,
    enabled: !!access_token,
    retry: false,
  })

  return (
    <>
      <AppBarPublic />
      <Container maxW="container.xl" mt={10}>
        <Flex minH="500px">
          <Center w="full">
            <Box>
              <Heading mb={2}>Appointment Management System</Heading>
              <Text>
                A practical test application submitted by{' '}
                <Link
                  href="mailto:hi@davidkhierl.com"
                  fontWeight="bold"
                  color="green">
                  David Khierl
                </Link>{' '}
                for{' '}
                <Link
                  href="https://www.vaimanagement.co/"
                  target="_blank"
                  fontWeight="bold"
                  color="#0077c2">
                  VAI Marketing Management
                </Link>
              </Text>
            </Box>
          </Center>
        </Flex>
      </Container>
    </>
  )
}

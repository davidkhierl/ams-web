'use client'

import { SignInForm } from '@/components/forms/sign-in-form'
import { Link } from '@chakra-ui/next-js'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'

export default function SignInPage() {
  return (
    <Box>
      <Container px={0}>
        <Box
          py={10}
          px={6}
          shadow="xl"
          border="1px"
          borderColor="gray.100"
          rounded="xl">
          <Heading>Welcome Back!👋</Heading>
          <Text mb={10} color="gray.500" fontWeight="medium">
            Sign back in to easily manage all your appointments.
          </Text>
          <SignInForm />
        </Box>
        <Center mt={10}>
          <Link href="signup" color="green.500" fontWeight="bold">
            Don&apos;t have account?
          </Link>
        </Center>
      </Container>
    </Box>
  )
}

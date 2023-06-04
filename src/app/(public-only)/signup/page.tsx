'use client'

import { SignUpForm } from '@/components/forms/sign-up-form'
import {
  Alert,
  AlertIcon,
  Box,
  Center,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react'

export default function SignUpPage() {
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
          <Heading>Patient Sign Up</Heading>
          <Text mb={10} color="gray.500" fontWeight="medium">
            One step away to easily manage all your doctor appointments.
          </Text>
          <SignUpForm />
        </Box>
        <Center mt={10}>
          <Alert status="info" rounded="md" maxW="96">
            <AlertIcon />
            Please contact admin if you are a Doctor
          </Alert>
        </Center>
      </Container>
    </Box>
  )
}

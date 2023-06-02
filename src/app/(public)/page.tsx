'use client'

import { Link } from '@chakra-ui/next-js'
import { Box, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'

export default function HomePage() {
  return (
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
  )
}

'use client'

import { Link } from '@chakra-ui/next-js'
import { Box, Container, Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { ImLeaf } from 'react-icons/im'

export interface AppBarProps {
  children?: ReactNode
}

export function AppBar({ children }: AppBarProps) {
  return (
    <Box borderBottom="1px" borderColor="gray.400">
      <Container maxW="container.xl">
        <Flex
          h="16"
          w="full"
          alignItems={{ base: 'center' }}
          justifyContent={{ base: 'space-between' }}>
          <Link
            href="/"
            color="green.500"
            fontWeight="bold"
            title="Appointment Management System"
            _hover={{ textDecoration: 'none' }}>
            <Box as="span" display="inline-block" mr={1}>
              <ImLeaf />
            </Box>
            Appointment{' '}
            <Text as="span" fontWeight="normal">
              MS
            </Text>
          </Link>
          {children}
        </Flex>
      </Container>
    </Box>
  )
}

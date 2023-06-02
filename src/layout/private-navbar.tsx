'use client'

import { Badge, Box, Container, Flex, Text } from '@chakra-ui/react'
import { ImLeaf } from 'react-icons/im'

import { UserMenu } from '@/components/user-menu/user-menu'
import { api } from '@/services/api'
import { Link } from '@chakra-ui/next-js'
import { useQuery } from '@tanstack/react-query'

export function PrivateNavbar() {
  const { data } = useQuery({
    queryKey: ['users', 'current_user'],
    queryFn: async () => {
      const res = await api.get('/users/me')
      return res.data
    },
  })

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
          <Box display={{ base: 'none', md: 'block' }}>
            {data.type === 'PATIENT' && (
              <Badge colorScheme="green">{data.type}</Badge>
            )}
            {data.type === 'DOCTOR' && (
              <Badge colorScheme="purple">{data.type}</Badge>
            )}
            {data.type === 'ADMIN' && (
              <Badge colorScheme="red">{data.type}</Badge>
            )}
          </Box>
          <UserMenu />
        </Flex>
      </Container>
    </Box>
  )
}

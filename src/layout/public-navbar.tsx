'use client'

import { Link } from '@chakra-ui/next-js'
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Text,
} from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import { HiOutlineHome } from 'react-icons/hi'
import { ImLeaf } from 'react-icons/im'
import { MdLogin } from 'react-icons/md'

export function PublicNavbar() {
  const pathname = usePathname()
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
          {pathname === '/signin' ? (
            <IconButton
              as={Link}
              href="/"
              title="Go back to home page"
              variant="outline"
              colorScheme="green"
              icon={<HiOutlineHome />}
              aria-label="Go back to home page"
            />
          ) : (
            <Button
              as={Link}
              href="/signin"
              title="Sign in"
              variant="outline"
              colorScheme="green"
              rightIcon={<MdLogin />}>
              Sign In
            </Button>
          )}
        </Flex>
      </Container>
    </Box>
  )
}

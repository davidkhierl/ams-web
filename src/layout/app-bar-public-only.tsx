'use client'

import { AppBar } from '@/layout/app-bar'
import { Link } from '@chakra-ui/next-js'
import { Button } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import { MdLogin } from 'react-icons/md'

export function AppBarPublicOnly() {
  const pathname = usePathname()
  // return (
  //   <Box borderBottom="1px" borderColor="gray.400">
  //     <Container maxW="container.xl">
  //       <Flex
  //         h="16"
  //         w="full"
  //         alignItems={{ base: 'center' }}
  //         justifyContent={{ base: 'space-between' }}>
  //         <Link
  //           href="/"
  //           color="green.500"
  //           fontWeight="bold"
  //           title="Appointment Management System"
  //           _hover={{ textDecoration: 'none' }}>
  //           <Box as="span" display="inline-block" mr={1}>
  //             <ImLeaf />
  //           </Box>
  //           Appointment{' '}
  //           <Text as="span" fontWeight="normal">
  //             MS
  //           </Text>
  //         </Link>
  //         {pathname === '/signin' ? (
  //           <IconButton
  //             as={Link}
  //             href="/"
  //             title="Go back to home page"
  //             variant="outline"
  //             colorScheme="green"
  //             icon={<HiOutlineHome />}
  //             aria-label="Go back to home page"
  //           />
  //         ) : (
  //           <Button
  //             as={Link}
  //             href="/signin"
  //             title="Sign in"
  //             variant="outline"
  //             colorScheme="green"
  //             rightIcon={<MdLogin />}>
  //             Sign In
  //           </Button>
  //         )}
  //       </Flex>
  //     </Container>
  //   </Box>
  // )
  return (
    <AppBar>
      {pathname === '/signin' && (
        <Button as={Link} href="/signup" variant="outline" colorScheme="green">
          Create account
        </Button>
      )}
      {pathname === '/signup' && (
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
    </AppBar>
  )
}

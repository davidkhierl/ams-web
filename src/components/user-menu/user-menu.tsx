'use client'

import { Link } from '@chakra-ui/next-js'
import { Button, IconButton } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import { HiOutlineHome } from 'react-icons/hi'
import { MdLogin } from 'react-icons/md'
export function UserMenu() {
  const pathname = usePathname()

  if (pathname === '/signin')
    return (
      <IconButton
        as={Link}
        href="/"
        title="Go back to home page"
        variant="outline"
        colorScheme="green"
        icon={<HiOutlineHome />}
        aria-label="Go back to home page"
      />
    )

  return (
    <Button
      as={Link}
      href="/signin"
      title="Sign in"
      variant="outline"
      colorScheme="green"
      rightIcon={<MdLogin />}>
      Sign In
    </Button>
  )
}

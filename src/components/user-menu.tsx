'use client'

import { useCachedCurrentUser } from '@/hooks/useCachedCurrentUser'
import signOut from '@/utils/sign-out'
import { Link } from '@chakra-ui/next-js'
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'
import { MdLogin, MdLogout } from 'react-icons/md'

export function UserMenu() {
  const user = useCachedCurrentUser()

  return (
    <Box>
      {user ? (
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaChevronDown />}
            variant="outline"
            colorScheme="green">
            {user.name}
          </MenuButton>
          <MenuList>
            <MenuItem icon={<MdLogout />} onClick={() => signOut()}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
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
    </Box>
  )
}

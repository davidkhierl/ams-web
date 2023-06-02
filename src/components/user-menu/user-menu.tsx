'use client'

import { api } from '@/services/api'
import { useSessionStore } from '@/store/session.store'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { MouseEventHandler } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'
export function UserMenu() {
  const clearSession = useSessionStore((state) => state.clearSession)

  const { push } = useRouter()

  const { data } = useQuery({
    queryKey: ['users', 'current_user'],
    queryFn: async () => {
      const res = await api.get('/users/me')
      return res.data
    },
  })

  const queryClient = useQueryClient()

  const handleLogoutButtonOnClick: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    queryClient.clear()
    clearSession()
    push('/signin')
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<FaChevronDown />}
        variant="outline"
        colorScheme="green">
        {data.name}
      </MenuButton>
      <MenuList>
        <MenuItem icon={<MdLogout />} onClick={handleLogoutButtonOnClick}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

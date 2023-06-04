'use client'

import { Badge, Box } from '@chakra-ui/react'

import { UserMenu } from '@/components/user-menu'
import { useCachedCurrentUser } from '@/hooks/useCachedCurrentUser'
import { AppBar } from '@/layout/app-bar'

export function AppBarPrivate() {
  const user = useCachedCurrentUser()

  return (
    <AppBar>
      <Box display={{ base: 'none', md: 'block' }}>
        {user?.type === 'PATIENT' && (
          <Badge colorScheme="green">{user.type}</Badge>
        )}
        {user?.type === 'DOCTOR' && (
          <Badge colorScheme="purple">{user.type}</Badge>
        )}
        {user?.type === 'ADMIN' && <Badge colorScheme="red">{user.type}</Badge>}
      </Box>
      <UserMenu />
    </AppBar>
  )
}

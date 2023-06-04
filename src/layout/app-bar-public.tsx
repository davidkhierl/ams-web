import { useCachedCurrentUser } from '@/hooks/useCachedCurrentUser'
import { AppBar } from '@/layout/app-bar'
import { Link } from '@chakra-ui/next-js'
import { Button } from '@chakra-ui/react'
import { MdLogin } from 'react-icons/md'

export function AppBarPublic() {
  const user = useCachedCurrentUser()

  return (
    <AppBar>
      {user ? (
        <Button
          as={Link}
          href="/appointments"
          variant="outline"
          colorScheme="green">
          Appointments
        </Button>
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
    </AppBar>
  )
}

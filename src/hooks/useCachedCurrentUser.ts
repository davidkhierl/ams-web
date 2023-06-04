import { User } from '@/services/types/user.type'
import { useQueryClient } from '@tanstack/react-query'

export function useCachedCurrentUser() {
  const queryClient = useQueryClient()

  return queryClient.getQueryData<User>(['users', 'current_user'])
}

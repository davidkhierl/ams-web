import { useSessionStore } from '@/store/session.store'
import { getQueryClient } from '@/utils/get-query-client'

export default function signOut() {
  useSessionStore.getState().clearSessionTokens()
  getQueryClient().clear()
}

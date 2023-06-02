import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface SessionStore {
  access_token?: string | null
  refresh_token?: string | null
  setAccessToken: (access_token: string) => void
  setRefreshToken: (refresh_token: string) => void
  clearSession: () => void
}

export const useSessionStore = create<SessionStore>()(
  persist(
    (set) => ({
      setAccessToken(access_token) {
        set({ access_token })
      },
      setRefreshToken(refresh_token) {
        set({ refresh_token })
      },
      clearSession() {
        set({ access_token: null, refresh_token: null })
      },
    }),
    { name: 'session-store' }
  )
)

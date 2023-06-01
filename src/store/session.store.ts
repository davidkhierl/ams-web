import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface SessionStore {
  access_token?: string
  refresh_token?: string
  setAccessToken: (access_token: string) => void
  setRefreshToken: (refresh_token: string) => void
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
    }),
    { name: 'session-store' }
  )
)

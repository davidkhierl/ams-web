import omit from 'lodash-es/omit'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface SessionStore {
  /**
   * Access token
   */
  access_token?: string
  /**
   * Refresh token
   */
  refresh_token?: string
  /**
   * Set access token
   * @param access_token {string}
   */
  setAccessToken: (access_token: string) => void
  /**
   * Set refresh token
   * @param refresh_token {string}
   */
  setRefreshToken: (refresh_token: string) => void
  /**
   * Clear tokens
   */
  clearSessionTokens: () => void
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
      clearSessionTokens: () =>
        set((state) => omit(state, ['access_token', 'refresh_token']), true),
    }),
    { name: 'session-store' }
  )
)

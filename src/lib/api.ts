import { useSessionStore } from '@/store/session.store'
import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
})

api.interceptors.request.use(
  async (config) => {
    const access_token = useSessionStore.getState().access_token

    config.headers['Authorization'] =
      config.headers['Authorization'] ?? `Bearer ${access_token}`
    config.headers['Accept'] = 'application/json'
    config.headers['Content-Type'] = 'application/json'

    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => {
    return response
  },
  async function (error) {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const res = await refreshAccessToken()
      useSessionStore.setState({
        access_token: res.access_token,
        refresh_token: res.refresh_token,
      })
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + res.access_token
      return api(originalRequest)
    }
    return Promise.reject(error)
  }
)

export async function refreshAccessToken() {
  const refresh_token = useSessionStore.getState().refresh_token

  const res = await api.get('/auth/refresh', {
    headers: {
      Authorization: `Bearer ${refresh_token}`,
    },
  })

  return res.data
}

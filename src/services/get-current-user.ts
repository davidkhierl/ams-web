import { api } from '@/lib/api'
import { User } from '@/services/types/user.type'
import { AxiosRequestConfig } from 'axios'

export async function getCurrentUser(
  config?: AxiosRequestConfig<any> | undefined
) {
  const res = await api.get<User>('/users/me', config)

  return res.data
}

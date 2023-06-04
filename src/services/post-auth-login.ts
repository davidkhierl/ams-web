import { api } from '@/lib/api'
import { AuthTokens } from '@/services/types/auth-tokens.type'
import { AxiosResponse } from 'axios'

export interface PostAuthLoginParams {
  email: string
  password: string
}

export async function postAuthLogin(data: PostAuthLoginParams) {
  const res = await api.post<
    AuthTokens,
    AxiosResponse<AuthTokens>,
    PostAuthLoginParams
  >('/auth/login', data)

  return res.data
}

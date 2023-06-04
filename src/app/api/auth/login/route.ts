import { api } from '@/lib/api'
import { AuthTokens } from '@/services/types/auth-tokens.type'
import { cookies } from 'next/headers'
import { type NextRequest } from 'next/server'
export async function POST(request: NextRequest) {
  try {
    const req = await request.json()

    const res = await api.post<AuthTokens>('/auth/login', req)

    const cookieStore = cookies()
    const token = cookieStore.get('token')

    console.log(token)
    // return new Response(JSON.stringify({ ...res.data }), {
    //   status: 200,
    //   headers: {
    //     'Set-Cookie': `access_token=${res.data.access_token}`,
    //   },
    // })
  } catch (e) {
    console.log(e)
  }
}

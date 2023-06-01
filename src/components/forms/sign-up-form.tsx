import { FormInput } from '@/components/forms/form-input'
import { api } from '@/services/api'
import { useSessionStore } from '@/store/session.store'
import { Link } from '@chakra-ui/next-js'
import { Alert, AlertIcon, Box, Button } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

export type SignUpFormInputs = {
  name: string
  email: string
  password: string
}

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Not a valid email' }),
  password: z.string().min(1, { message: 'Password is required' }),
})

export function SignUpForm() {
  const setAccessToken = useSessionStore((state) => state.setAccessToken)
  const setRefreshToken = useSessionStore((state) => state.setRefreshToken)

  const { push } = useRouter()

  const [isAccountAlreadyExist, setIsAccountAlreadyExist] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm<SignUpFormInputs>({
    resolver: zodResolver(schema),
  })

  const mutation = useMutation({
    mutationFn: (cred: SignUpFormInputs) => {
      return api.post('/auth/patient/signup', cred)
    },
  })

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    try {
      const res = await mutation.mutateAsync(data)

      setAccessToken(res.data.access_token)
      setRefreshToken(res.data.refresh_token)

      push('/appointments')
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          error.response.data.errors.forEach((inputError: any) => {
            setError(inputError.property, {
              message:
                inputError.constraints[Object.keys(inputError.constraints)[0]],
            })
          })
        }

        if (error.response?.status === 409) setIsAccountAlreadyExist(true)
      }
    }
  }
  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      flexDir="column"
      gap={4}>
      {isAccountAlreadyExist && (
        <Alert status="error" rounded="md">
          <AlertIcon />
          <span>
            Account with this email already exist.{' '}
            <Link href="/signin" fontWeight="bold">
              Sign in?
            </Link>
          </span>
        </Alert>
      )}
      <FormInput
        label="Name"
        type="text"
        {...register('name')}
        error={errors.name?.message}
      />
      <FormInput
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
      />
      <FormInput
        label="Password"
        type="password"
        {...register('password')}
        error={errors.password?.message}
      />
      <Button
        type="submit"
        colorScheme="green"
        isLoading={isSubmitting}
        disabled={isSubmitSuccessful}>
        Sign Up
      </Button>
    </Box>
  )
}

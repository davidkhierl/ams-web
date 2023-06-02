import { FormInput } from '@/components/forms/form-input'
import { api } from '@/services/api'
import { useSessionStore } from '@/store/session.store'
import { Alert, AlertIcon, Box, Button } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdLogin } from 'react-icons/md'
import { z } from 'zod'

export type SignInFormInputs = {
  email: string
  password: string
}

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export function SignInForm() {
  const setAccessToken = useSessionStore((state) => state.setAccessToken)
  const setRefreshToken = useSessionStore((state) => state.setRefreshToken)

  const [hasError, setHasError] = useState(false)

  const { push } = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<SignInFormInputs>({
    resolver: zodResolver(schema),
  })

  const mutation = useMutation({
    mutationFn: (cred: SignInFormInputs) => {
      return api.post('/auth/login', cred)
    },
  })

  const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
    try {
      const res = await mutation.mutateAsync(data)

      setAccessToken(res.data.access_token)
      setRefreshToken(res.data.refresh_token)

      push('/appointments')
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.message)
      }
      setHasError(true)
    }
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      flexDir="column"
      gap={4}>
      {hasError && (
        <Alert status="error" rounded="md">
          <AlertIcon />
          <span>Incorrect login details</span>
        </Alert>
      )}
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
        isLoading={isSubmitting || isSubmitSuccessful}
        rightIcon={<MdLogin />}>
        Sign In
      </Button>
    </Box>
  )
}

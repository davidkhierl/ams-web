import { FormInput } from '@/components/forms/form-input'
import { Box, Button } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormInputs>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
    console.log(data)
  }
  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      flexDir="column"
      gap={4}>
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
        rightIcon={<MdLogin />}>
        Sign In
      </Button>
    </Box>
  )
}

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  forwardRef,
} from '@chakra-ui/react'

export interface FormInputProps extends InputProps {
  error?: string
  label: string
}

export const FormInput = forwardRef<FormInputProps, 'input'>(
  ({ error, label, disabled, required, ...props }, ref) => {
    return (
      <FormControl
        isInvalid={!!error}
        isDisabled={disabled}
        isRequired={required}>
        <FormLabel>{label}</FormLabel>
        <Input ref={ref} {...props} />
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    )
  }
)

FormInput.displayName = 'FormInput'

import { InputProps as ChakraInputProps } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { FormFieldWrapperProps } from '../FormFieldWrapper/FormFieldWrapper.types'

export type InputType =
  | 'currency'
  | 'email'
  | 'number'
  | 'password'
  | 'phone'
  | 'text'

export interface InputProps extends Omit<ChakraInputProps, 'type' | 'name'> {
  autocomplete?: string
  type?: InputType
  wrapperProps: FormFieldWrapperProps
}

export interface PasswordToggleIconProps {
  error: FormFieldWrapperProps['error']
  isPasswordShowing: boolean
  setPasswordShowing: Dispatch<SetStateAction<boolean>>
  type: InputType
}

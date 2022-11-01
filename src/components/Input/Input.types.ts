import { BoxProps, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { FormFieldWrapperProps } from '../FormFieldWrapper/FormFieldWrapper.types'

export type InputType =
  | 'currency'
  | 'email'
  | 'number'
  | 'password'
  | 'phone'
  | 'text'

type InputPropsExtensions = Omit<ChakraInputProps, 'type' | 'name'> &
  Pick<FormFieldWrapperProps, 'name' | 'label'>

export interface InputProps extends InputPropsExtensions {
  autocomplete?: string
  type?: InputType
  wrapperProps?: Omit<FormFieldWrapperProps, 'name' | 'label'>
}

export interface PasswordToggleIconProps {
  ariaLabel: BoxProps['aria-label']
  fill: BoxProps['fill']
  onClick: VoidFunction
  type: InputType
}

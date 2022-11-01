import { InputProps as ChakraInputProps } from '@chakra-ui/react'
import { FormFieldWrapperProps } from '../FormFieldWrapper/FormFieldWrapper.types'

export type ALInputType =
  | 'currency'
  | 'email'
  | 'number'
  | 'password'
  | 'phone'
  | 'text'

type InputPropsExtensions = Omit<ChakraInputProps, 'type' | 'name'> &
  Pick<FormFieldWrapperProps, 'name' | 'label' | 'error'>

export interface ALInputProps extends InputPropsExtensions {
  type?: ALInputType
  wrapperProps?: Omit<FormFieldWrapperProps, 'name' | 'label' | 'error'>
}

import { FormControlProps } from '@chakra-ui/react'

export interface FormFieldWrapperProps extends FormControlProps {
  error?: null | false | string
  helperMessage?: string
  isRequired?: boolean
  label: string
  name: string
  secondaryLabel?: string
  tooltipMessage?: string
}

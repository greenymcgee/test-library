import { Box, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { ALFieldsetBelowControlProps } from './ALFieldsetBelowControl.type'

export default function ALFieldsetBelowControl({
  error,
  helperText,
}: ALFieldsetBelowControlProps): ReactElement {
  if (error) {
    return (
      <FormErrorMessage color="red.500" fontSize="xs" lineHeight="small">
        {error}
      </FormErrorMessage>
    )
  }

  return (
    <Box data-testid="form-field-error-placeholder" minHeight="18px">
      <FormHelperText fontSize="xs" lineHeight="small">
        {helperText}
      </FormHelperText>
    </Box>
  )
}

import { Box, FormErrorMessage, Text } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { FormFieldHelperMessageProps } from './FormFieldHelperMessage.types'

export default function FormFieldHelperMessage({
  error,
  helperMessage,
}: FormFieldHelperMessageProps): ReactElement {
  if (error) {
    return (
      <FormErrorMessage color="red.500" fontSize={{ base: 'xs', lg: 'xxs' }}>
        {error}
      </FormErrorMessage>
    )
  }

  return (
    <Box data-testid="form-field-error-placeholder" minHeight="4">
      <Text fontSize="xs">{helperMessage}</Text>
    </Box>
  )
}

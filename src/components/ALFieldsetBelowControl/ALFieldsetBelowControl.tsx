import { Box, Flex, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { ALFieldsetBelowControlProps } from './ALFieldsetBelowControl.types'

export default function ALFieldsetBelowControl({
  error,
  helperText,
  warning,
}: ALFieldsetBelowControlProps): ReactElement {
  if (error) {
    return (
      <Flex
        alignItems="center"
        color="red.500"
        fontSize="xs"
        lineHeight="small"
        mt={1}
      >
        {/* TODO: replace this with FA */}
        <RiErrorWarningFill style={{ fontSize: 'inherit' }} />
        <FormErrorMessage fontSize="inherit" pl={1}>
          {error}
        </FormErrorMessage>
      </Flex>
    )
  }

  return (
    <Box data-testid="form-field-error-placeholder" minHeight="5" mt={1}>
      <FormHelperText fontSize="xs" lineHeight="small">
        <Box
          color="purple.500"
          fontSize="inherit"
          fontWeight="medium"
          lineHeight="small"
          mb={helperText ? 1 : undefined}
        >
          {warning}
        </Box>
        {helperText}
      </FormHelperText>
    </Box>
  )
}

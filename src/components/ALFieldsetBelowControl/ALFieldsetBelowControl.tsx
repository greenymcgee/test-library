import { Box, Flex, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { ALFieldsetBelowControlProps } from './ALFieldsetBelowControl.types'
import { getMarginBottom } from './utils'

export default function ALFieldsetBelowControl({
  error,
  helperText,
  warning,
}: ALFieldsetBelowControlProps): ReactElement {
  const marginBottom = getMarginBottom(Boolean(helperText || error || warning))

  if (error) {
    return (
      <Flex
        alignItems="center"
        color="red.500"
        fontSize="xs"
        mb={marginBottom}
        mt={1}
      >
        {/* TODO: replace this with FA */}
        <RiErrorWarningFill style={{ fontSize: 'inherit' }} />
        <FormErrorMessage fontSize="inherit" lineHeight="small" pl={1} m={0}>
          {error}
        </FormErrorMessage>
      </Flex>
    )
  }

  return (
    <Box
      data-testid="form-field-error-placeholder"
      minHeight={4}
      mt={1}
      mb={marginBottom}
    >
      <FormHelperText fontSize="xs" lineHeight="small" mt={0}>
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

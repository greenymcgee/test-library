import React, { PropsWithChildren, ReactElement } from 'react'
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
} from '@chakra-ui/react'
import Tooltip from '../Tooltip'
import { FormFieldWrapperProps } from './FormFieldWrapper.types'
import SecondaryLabel from '../SecondaryLabel'

export default function FormFieldWrapper({
  children,
  error,
  isRequired,
  label,
  name,
  tooltipMessage,
  secondaryLabel,
  helper,
  ...options
}: PropsWithChildren<FormFieldWrapperProps>): ReactElement {
  const isInvalid = Boolean(error)

  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired} {...options}>
      <Flex>
        <FormLabel
          color="inherit"
          fontSize="xs"
          fontWeight="medium"
          htmlFor={name}
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {label}
        </FormLabel>
        <SecondaryLabel label={secondaryLabel} />
        <Tooltip message={tooltipMessage} marginLeft="3" />
      </Flex>
      {children}
      {isInvalid ? (
        <FormErrorMessage color="red.500" fontSize={{ base: 'xs', lg: 'xxs' }}>
          {error}
        </FormErrorMessage>
      ) : (
        <Box minHeight="17px" data-testid="form-field-error-placeholder">
          <Text fontSize="xs">{helper}</Text>
        </Box>
      )}
    </FormControl>
  )
}

import React, { PropsWithChildren, ReactElement } from 'react'
import { Flex, FormControl, FormLabel } from '@chakra-ui/react'
import Tooltip from '../Tooltip'
import { FormFieldWrapperProps } from './FormFieldWrapper.types'
import SecondaryLabel from '../SecondaryLabel'
import FormFieldHelperMessage from '../FormFieldHelperMessage/FormFieldHelperMessage'

export default function FormFieldWrapper({
  children,
  error,
  helperMessage,
  label,
  name,
  secondaryLabel,
  tooltipMessage,
  ...options
}: PropsWithChildren<FormFieldWrapperProps>): ReactElement {
  const isInvalid = Boolean(error)

  return (
    <FormControl as="fieldset" isInvalid={isInvalid} {...options}>
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
      <FormFieldHelperMessage error={error} helperMessage={helperMessage} />
    </FormControl>
  )
}

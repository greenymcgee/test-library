import React, { PropsWithChildren, ReactElement } from 'react'
import { Flex, FormControl, FormLabel } from '@chakra-ui/react'
import { ALFieldsetProps } from './ALFieldset.types'
import SecondaryLabel from '../ALFieldsetSecondaryLabel'
import ALFieldsetBelowControl from '../ALFieldsetBelowControl'

export default function ALFieldset({
  children,
  error,
  helperText,
  label,
  name,
  secondaryLabel,
  ...options
}: PropsWithChildren<ALFieldsetProps>): ReactElement {
  const isInvalid = Boolean(error)

  return (
    <FormControl as="fieldset" isInvalid={isInvalid} {...options}>
      <Flex>
        <FormLabel
          color="inherit"
          fontSize="xs"
          fontWeight="medium"
          htmlFor={name}
          lineHeight="small"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {label}
        </FormLabel>
        <SecondaryLabel label={secondaryLabel} />
      </Flex>
      {children}
      <ALFieldsetBelowControl error={error} helperText={helperText} />
    </FormControl>
  )
}

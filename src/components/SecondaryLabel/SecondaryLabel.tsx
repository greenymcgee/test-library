import { Text } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { SecondaryLabelProps } from './SecondaryLabel.types'

export default function SecondaryLabel({
  label,
  ...options
}: SecondaryLabelProps): ReactElement {
  if (!label) return <></>

  return (
    <Text
      data-testid="secondary-label"
      fontSize="xs"
      color="gray.500"
      fontWeight="semibold"
      {...options}
    >
      {' '}
      - {label}
    </Text>
  )
}

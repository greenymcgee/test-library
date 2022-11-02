import { Text } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { ALFieldsetSecondaryLabelProps } from './ALFieldsetSecondaryLabel.types'

export default function ALFieldsetSecondaryLabel({
  label,
  ...options
}: ALFieldsetSecondaryLabelProps): ReactElement {
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

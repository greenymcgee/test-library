import { ReactNode } from 'react'
import { BoxProps } from '@chakra-ui/react'

export interface TooltipProps extends BoxProps {
  message: string | ReactNode
}

import { ComponentStyleConfig } from '@chakra-ui/react'

const v2Base = {
  borderRadius: '4px',
  minWidth: '250px',
  paddingX: 8,
  paddingY: 3,
  fontWeight: 'semibold',
  height: '45px',
}

export const Button: ComponentStyleConfig = {
  defaultProps: {
    variant: 'primary',
  },
  variants: {
    none: {},
    primary: {
      _focus: { backgroundColor: 'teal.700' },
      _hover: { backgroundColor: 'teal.700' },
      backgroundColor: 'teal.600',
      borderRadius: '5',
      color: 'white',
      fontWeight: '600',
      minWidth: '250px',
      paddingX: '6',
      paddingY: '3',
      textAlign: 'center',
    },
    primaryV2: {
      ...v2Base,
      backgroundColor: 'blue.500',
      color: 'white',
    },
    outlineV2: {
      ...v2Base,
      backgroundColor: 'white',
      color: 'blue.500',
      border: '2px solid',
      borderColor: 'blue.500',
    },
    secondary: {
      _focus: { backgroundColor: 'blue.500' },
      _hover: { backgroundColor: 'blue.500' },
      _disabled: {
        backgroundColor: 'gray.400',
        cursor: 'not-allowed',
      },
      backgroundColor: 'blue.500',
      borderRadius: '5',
      color: 'white',
      fontWeight: '600',
      minWidth: '250px',
      paddingX: '6',
      paddingY: '3',
      textAlign: 'center',
    },
    muted: {
      _focus: { backgroundColor: 'gray.500' },
      _hover: { backgroundColor: 'gray.500' },
      backgroundColor: 'gray.300',
      borderRadius: '5',
      fontWeight: '600',
      minWidth: '250px',
      paddingX: '6',
      paddingY: '3',
      textAlign: 'center',
    },
    link: {
      _focus: { color: 'teal.800' },
      _hover: { color: 'teal.800' },
      color: 'teal.700',
      fontWeight: '500',
      minWidth: '250px',
      paddingX: '6',
      paddingY: '3',
      textAlign: 'center',
      textDecoration: 'underline',
    },
  },
}

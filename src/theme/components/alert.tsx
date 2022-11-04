import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Alert: ComponentMultiStyleConfig = {
  parts: ['icon', 'container', 'title', 'description', 'inner'],
  defaultProps: {
    container: {
      variant: 'primary',
    },
  },
  baseStyle: {
    icon: {
      marginRight: '2',
      width: '5',
    },
    container: {
      alignItems: 'center',
      backgroundColor: 'teal.800',
      color: 'white',
      padding: '3',
      button: {
        padding: '2',
      },
      '&': {
        maxWidth: '790px',
        width: 'calc(100vw - 3rem)',
      },
    },
    title: {
      fontWeight: '600',
      fontSize: ['sm', 'md'],
    },
    description: {
      fontSize: ['xs', 'sm'],
    },
  },
  variants: {
    primary: {
      container: {
        backgroundColor: 'blue.500',
        color: 'white',
      },
    },
    secondary: {
      container: {
        backgroundColor: 'teal.700',
        color: 'white',
      },
    },
    error: {
      container: {
        backgroundColor: 'red.500',
        color: 'white',
      },
    },
  },
}

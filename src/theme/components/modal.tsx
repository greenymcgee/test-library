import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Modal: ComponentMultiStyleConfig = {
  parts: ['overlay', 'dialog', 'dialogContainer', 'closeButton'],
  baseStyle: {
    overlay: {
      backgroundColor: 'modalOverlay',
      zIndex: 10000,
    },
    dialogContainer: {
      zIndex: 10000,
    },
    dialog: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 6,
      borderRadius: '4px',
      margin: 'auto',
      boxShadow: '0 0 12px overlay.500',
      width: 'fit-content',
      maxWidth: {
        base: '90%',
        lg: '1300px',
      },
    },
    closeButton: {
      position: 'absolute',
      top: '3',
      right: '3',
      width: '12px',
      height: '12px',
      '& svg': {
        width: '100%',
        height: '100%',
      },
    },
  },
}

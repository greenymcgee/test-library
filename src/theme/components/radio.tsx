import { ComponentMultiStyleConfig } from '@chakra-ui/react'

const baseLabel = {
  position: 'relative',
  cursor: 'pointer',
  marginLeft: '22px',

  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-20px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: 'transparent',
    border: '1px solid',
    borderColor: 'gray.300',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    left: '-16px',
    top: 'calc(50% + 4px)',
    transform: 'translateY(calc(-50% - 4px))',
    borderRadius: '50%',
    width: '8px',
    height: '8px',
  },
}

export const Radio: ComponentMultiStyleConfig = {
  parts: ['container', 'control', 'icon', 'label', 'input'],
  defaultProps: {
    variant: 'primary',
  },
  variants: {
    primary: {
      label: {
        ...baseLabel,

        '&[data-checked]::after': {
          background: 'teal.600',
        },
      },
    },
    primaryV2: {
      label: {
        ...baseLabel,

        '&[data-checked]::after': {
          background: 'blue.500',
        },
      },
    },
  },
}

import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Checkbox: ComponentMultiStyleConfig = {
  parts: ['container', 'control', 'icon', 'label'],
  defaultProps: {
    variant: 'primary',
  },
  variants: {
    primary: {
      icon: {
        color: 'teal.600',
      },
      control: {
        _active: { outline: '1px solid', outlineColor: 'teal.200' },
        _focus: { outline: '1px solid', outlineColor: 'teal.200' },
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: 'teal.400',
        borderRadius: '3',
        marginTop: '1',
        minHeight: '6',
        minWidth: '6',

        '&[data-invalid]': {
          _active: { outline: '1px solid', outlineColor: 'red.500' },
          _focus: { outline: '1px solid', outlineColor: 'red.500' },
          backgroundColor: 'red.200',
          borderColor: 'red.500',
          color: 'red',
        },
      },
      label: {
        marginLeft: '3',
      },
      container: {
        alignItems: 'flex-start',
      },
    },
    primaryV2: {
      icon: {
        color: 'teal.600',
      },
      control: {
        _active: { outline: '1px solid', outlineColor: 'teal.200' },
        _focus: { outline: '1px solid', outlineColor: 'teal.200' },
        alignSelf: 'flex-start',
        border: '1px solid',
        borderColor: 'gray.400',
        background: 'gray.200',
        minHeight: '6',
        minWidth: '6',

        '&[data-invalid]': {
          _active: { outline: '1px solid', outlineColor: 'red.500' },
          _focus: { outline: '1px solid', outlineColor: 'red.500' },
          backgroundColor: 'red.200',
          borderColor: 'red.500',
          color: 'red',
        },
      },
      label: {
        marginLeft: '3',
      },
      container: {
        alignItems: 'flex-start',
      },
    },
  },
}

import { ComponentStyleConfig } from '@chakra-ui/react'
import { Button } from './buttons'

const ButtonVariants = Button.variants || {}

export const Text: ComponentStyleConfig = {
  variants: {
    disclosure: {
      color: 'gray.500',
      fontSize: 'xs',
    },
    error: {
      color: 'red.500',
      fontSize: 'xs',
    },
    link: {
      cursor: 'pointer',
      color: 'teal.600',
      textDecoration: 'underline',
    },
  },
}

export const Heading: ComponentStyleConfig = {
  defaultProps: {
    variant: 'primary',
  },
  variants: {
    primary: {
      color: 'teal.800',
      fontWeight: '600',
    },
    secondary: {
      color: 'blue.500',
      fontWeight: '600',
    },
    muted: {
      color: 'gray.700',
      fontWeight: '500',
    },
    disclosure: {
      color: 'gray.500',
      fontSize: 'xs',
      fontWeight: 'bold',
      paddingY: '2',
      textTransform: 'uppercase',
    },
  },
}

export const Link: ComponentStyleConfig = {
  defaultProps: {
    variant: 'primary',
  },
  variants: {
    button: { ...ButtonVariants.primary, textDecoration: 'none' },
    buttonMuted: { ...ButtonVariants.muted, textDecoration: 'none' },
    buttonPrimary: { ...ButtonVariants.muted, textDecoration: 'none' },
    buttonSecondary: { ...ButtonVariants.secondary, textDecoration: 'none' },
    primary: {
      _focus: { textDecoration: 'underline' },
      _hover: { textDecoration: 'underline' },
      color: 'teal.600',
      fontSize: 'inherit',
    },
    secondary: {
      _focus: { textDecoration: 'underline' },
      _hover: { textDecoration: 'underline' },
      color: 'blue.500',
      fontSize: 'inherit',
    },
    outlineV2: {
      _hover: { textDecoration: 'none' },
      display: 'inline-block',
      textAlign: 'center',
      borderRadius: '4px',
      minWidth: '250px',
      pt: 2,
      pb: 3,
      px: 8,
      fontWeight: 'semibold',
      height: '45px',
      backgroundColor: 'white',
      color: 'blue.500',
      border: '2px solid',
      borderColor: 'blue.500',
    },
    strong: {
      _focus: { textDecoration: 'underline' },
      _hover: { textDecoration: 'underline' },
      color: 'teal.700',
      fontSize: 'inherit',
      fontWeight: '600',
      textDecoration: 'underline',
    },
    disclosure: {
      _focus: { textDecoration: 'underline' },
      _hover: { textDecoration: 'underline' },
      color: 'gray.500',
      fontSize: 'xs',
    },
    muted: {
      _focus: { textDecoration: 'underline' },
      _hover: { textDecoration: 'underline' },
      color: 'gray.700',
      fontSize: 'inherit',
    },
    menuitem: {
      _focus: { textDecoration: 'underline' },
      _hover: { textDecoration: 'underline' },
      color: 'gray.700',
      fontSize: 'lg',
    },
    pill: {
      backgroundColor: 'teal.400',
      borderRadius: '16px',
      boxShadow: 'rgb(2 176 175 / 22%) 0px -1px 0px inset',
      color: 'teal.800',
      fontSize: 'xs',
      fontWeight: '600',
      padding: '4px 8px',
      textAlign: 'center',
      textDecoration: 'underline',
      whiteSpace: 'nowrap',
    },
  },
}

import { theme as defaultTheme } from '@chakra-ui/react'

const fontFamily = "Montserrat, Roboto, 'Helvetica Neue', Arial, sans-serif"

export const fonts = {
  ...defaultTheme.fonts,
  body: fontFamily,
  heading: fontFamily,
}

export const fontSizes = {
  xxs: '0.688rem',
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  '4xl': '2.25rem',
  '5xl': '2.75rem',
  '6xl': '4rem',
}

export const lineHeights = {
  ...defaultTheme.lineHeights,
  small: '1.125rem',
}

import { extendTheme } from '@chakra-ui/react'
import * as components from './components'
import breakpoints from './breakpoints'
import colors from './colors'
import config from './config'
import styles from './styles'
import { fonts, fontSizes, lineHeights } from './typography'

const theme = extendTheme({
  breakpoints,
  colors,
  components,
  config,
  fonts,
  fontSizes,
  lineHeights,
  styles,
})

export { theme }

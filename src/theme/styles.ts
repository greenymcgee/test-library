export default {
  global: {
    '*': {
      boxSizing: 'border-box',
      fontFamily: 'body',
      fontSize: ['sm', 'md'],
      margin: 0,
      padding: 0,

      h1: { fontSize: { base: '3xl', md: '4xl', '2xl': '5xl' } },
      h2: { fontSize: { base: '2xl', md: '3xl', '2xl': '4xl' } },
      h3: { fontSize: { base: 'xl', md: '2xl', '2xl': '3xl' } },
      h4: { fontSize: { base: 'lg', md: 'xl', '2xl': '2xl' } },
    },
    body: {
      minHeight: '100vh',
      minWidth: '320px',
      overflowX: 'hidden',
      '&.loading': { cursor: 'wait' },

      // Makes fonts more palatable in Chrome/Webkit based browsers.
      WebkitFontSmoothing: 'antialiased',

      // TODO: Find a better way to do this.
      // Currently, I couldn't find a mechanism to make a toast full width
      // using theme styles.
      '.chakra-toast__inner': {
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        maxWidth: 'calc(100vw - 3rem) !important',
        width: 'calc(100vw - 3rem)',
      },
    },
    label: {
      // This is the only way I could find to style a labels required indicator.
      'span[aria-hidden=true][role="presentation"]': {
        color: 'red.500',
        fontSize: ['xs'],
        fontWeight: '600',
        marginLeft: '2px',
      },
    },
  },
}

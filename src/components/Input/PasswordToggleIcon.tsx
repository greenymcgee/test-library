import { Box, InputRightElement } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { PasswordToggleIconProps } from './Input.types'
import { inputStyles, togglePasswordShowing } from './utils'

export function PasswordToggleIcon({
  error,
  isPasswordShowing,
  setPasswordShowing,
  type,
}: PasswordToggleIconProps): ReactElement {
  if (type !== 'password') return <></>

  return (
    <InputRightElement height="100%" mr="2">
      <Box
        aria-label={`${isPasswordShowing ? 'Hide' : 'Show'} Password`}
        as="button"
        type="button"
        onClick={(): void => setPasswordShowing(togglePasswordShowing)}
        pr="1px"
        pt="1px"
      >
        <Box
          as="svg"
          data-testid="password-toggle-svg"
          fill={inputStyles(error).toggleIconFill}
          viewBox="0 0 24 24"
          width="5"
        >
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" />
        </Box>
      </Box>
    </InputRightElement>
  )
}

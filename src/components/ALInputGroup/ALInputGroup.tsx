import { Input as ChakraInput, InputGroup } from '@chakra-ui/react'
import React, { ReactElement, useCallback, useState } from 'react'
import { compose, noop } from '@above-lending/prelude'
import { ALInputGroupProps } from './ALInputGroup.types'
import ALFieldset from '../ALFieldset'
import { PasswordToggleIcon } from './PasswordToggleIcon'
import { inputStyles, inputType, removeIgnoredInputCharacters } from './utils'

export default function ALInputGroup({
  error,
  label,
  name,
  type = 'text',
  inputProps = {},
  ...options
}: ALInputGroupProps): ReactElement {
  const [isPasswordShowing, setPasswordShowing] = useState(false)
  const handleChange = compose(
    inputProps.onChange ?? noop,
    removeIgnoredInputCharacters(type),
  )

  const { inputBorderColor, toggleIconFill } = inputStyles(error)

  const togglePasswordShowing = useCallback(
    () => setPasswordShowing(prev => !prev),
    [],
  )

  return (
    <ALFieldset error={error} label={label} name={name} {...options}>
      <InputGroup>
        <ChakraInput
          _focus={{
            outline: '1px solid',
            outlineColor: 'blue.500',
            outlineOffset: '1px',
          }}
          autoComplete={inputProps.autoComplete ?? 'on'}
          border="1px solid"
          borderColor={inputBorderColor}
          borderRadius="none"
          data-testid={`${name}-input`}
          fontSize="md"
          height="auto"
          id={name}
          lineHeight="6"
          name={name}
          onChange={handleChange}
          px="2"
          py="1"
          type={inputType(isPasswordShowing, type)}
          width="full"
          {...inputProps}
        />
        <PasswordToggleIcon
          ariaLabel={`${isPasswordShowing ? 'Hide' : 'Show'} Password`}
          fill={toggleIconFill}
          onClick={togglePasswordShowing}
          type={type}
        />
      </InputGroup>
    </ALFieldset>
  )
}

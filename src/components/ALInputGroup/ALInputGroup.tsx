import { Input as ChakraInput, InputGroup } from '@chakra-ui/react'
import React, { ReactElement, useState } from 'react'
import { compose, noop } from '@above-lending/prelude'
import { ALInputGroupProps } from './ALInputGroup.types'
import FormFieldWrapper from '../ALFieldset'
import { PasswordToggleIcon } from './PasswordToggleIcon'
import {
  inputAutoComplete,
  inputStyles,
  inputType,
  removeIgnoredInputCharacters,
  togglePasswordShowing,
} from './utils'

export default function ALInputGroup({
  error,
  label,
  name,
  type = 'text',
  inputProps = {},
  ...options
}: ALInputGroupProps): ReactElement {
  const [isPasswordShowing, setPasswordShowing] = useState(false)
  const handleChange = inputProps.onChange
    ? compose(inputProps.onChange, removeIgnoredInputCharacters(type))
    : noop
  const { inputBackgroundColor, inputBorderColor, toggleIconFill } =
    inputStyles(error)

  return (
    <FormFieldWrapper error={error} label={label} name={name} {...options}>
      <InputGroup>
        <ChakraInput
          autoComplete={inputAutoComplete(inputProps.autoComplete)}
          backgroundColor={inputBackgroundColor}
          border="1px solid"
          borderColor={inputBorderColor}
          data-testid={`${name}-input`}
          fontSize="md"
          id={name}
          lineHeight="6"
          name={name}
          onChange={handleChange}
          outline="none"
          px="2"
          py="1"
          type={inputType(isPasswordShowing, type)}
          width="full"
          {...inputProps}
        />
        <PasswordToggleIcon
          ariaLabel={`${isPasswordShowing ? 'Hide' : 'Show'} Password`}
          fill={toggleIconFill}
          onClick={(): void => setPasswordShowing(togglePasswordShowing)}
          type={type}
        />
      </InputGroup>
    </FormFieldWrapper>
  )
}

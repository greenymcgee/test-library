import { Input as ChakraInput, InputGroup } from '@chakra-ui/react'
import React, { ReactElement, useState } from 'react'
import { compose, noop } from '@above-lending/prelude'
import { InputProps } from './Input.types'
import FormFieldWrapper from '../FormFieldWrapper'
import { PasswordToggleIcon } from './PasswordToggleIcon'
import {
  inputAutoComplete,
  inputStyles,
  inputType,
  removeIgnoredInputCharacters,
  togglePasswordShowing,
} from './utils'

export default function ALInput({
  autocomplete,
  label,
  name,
  type = 'text',
  onChange = noop,
  wrapperProps = {},
  ...options
}: InputProps): ReactElement {
  const [isPasswordShowing, setPasswordShowing] = useState(false)
  const handleChange = compose(onChange, removeIgnoredInputCharacters(type))
  const { inputBackgroundColor, inputBorderColor, toggleIconFill } =
    inputStyles(wrapperProps.error)

  return (
    <FormFieldWrapper label={label} name={name} {...wrapperProps}>
      <InputGroup>
        <ChakraInput
          autoComplete={inputAutoComplete(autocomplete)}
          backgroundColor={inputBackgroundColor}
          border="1px solid"
          borderColor={inputBorderColor}
          data-testid={`${name}-input`}
          fontSize="md"
          id={name}
          lineHeight="7"
          name={name}
          onChange={handleChange}
          outline="none"
          px="2"
          type={inputType(isPasswordShowing, type)}
          width="full"
          {...options}
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

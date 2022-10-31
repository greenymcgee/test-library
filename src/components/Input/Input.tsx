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
} from './utils'

export default function Input({
  autocomplete,
  type = 'text',
  onChange = noop,
  wrapperProps,
  ...options
}: InputProps): ReactElement {
  const [isPasswordShowing, setPasswordShowing] = useState(false)
  const handleChange = compose(onChange, removeIgnoredInputCharacters(type))
  const { inputBackgroundColor, inputBorderColor } = inputStyles(
    wrapperProps.error,
  )

  return (
    <FormFieldWrapper {...wrapperProps}>
      <InputGroup>
        <ChakraInput
          autoComplete={inputAutoComplete(autocomplete)}
          backgroundColor={inputBackgroundColor}
          border="1px solid"
          borderColor={inputBorderColor}
          data-testid={`${wrapperProps.name}-input`}
          fontSize="md"
          id={wrapperProps.name}
          lineHeight="7"
          name={wrapperProps.name}
          onChange={handleChange}
          outline="none"
          px="2"
          type={inputType(isPasswordShowing, type)}
          width="full"
          {...options}
        />
        <PasswordToggleIcon
          error={wrapperProps.error}
          isPasswordShowing={isPasswordShowing}
          setPasswordShowing={setPasswordShowing}
          type={type}
        />
      </InputGroup>
    </FormFieldWrapper>
  )
}

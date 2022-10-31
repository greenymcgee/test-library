import { Input as ChakraInput, InputGroup } from '@chakra-ui/react'
import React, { ReactElement, useState } from 'react'
import { compose, noop } from '@above-lending/prelude'
import { InputProps } from './Input.types'
import FormFieldWrapper from '../FormFieldWrapper'
import { PasswordToggleIcon } from './PasswordToggleIcon'
import { inputCharacterTypes, removeIgnoredInputCharacters } from './utils'

export default function Input({
  autocomplete,
  type = 'text',
  onChange = noop,
  wrapperProps,
  ...options
}: InputProps): ReactElement {
  const [isPasswordShowing, setPasswordShowing] = useState(false)
  const handleChange = compose(onChange, removeIgnoredInputCharacters(type))

  return (
    <FormFieldWrapper {...wrapperProps}>
      <InputGroup>
        <ChakraInput
          autoComplete={autocomplete ?? 'on'}
          backgroundColor={wrapperProps.error ? 'red.200' : 'gray.200'}
          border="1px solid"
          borderColor={wrapperProps.error ? 'red.500' : 'gray.400'}
          data-testid={`${wrapperProps.name}-input`}
          fontSize="md"
          id={wrapperProps.name}
          lineHeight="1.875rem"
          name={wrapperProps.name}
          onChange={handleChange}
          outline="none"
          px="2"
          type={isPasswordShowing ? 'text' : inputCharacterTypes[type] ?? type}
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

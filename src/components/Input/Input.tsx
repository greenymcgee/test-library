import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import React, { ChangeEvent, ReactElement, useState } from 'react'
import { compose, noop } from '@above-lending/prelude'
import { InputProps, InputType } from './Input.types'
import FormFieldWrapper from '../FormFieldWrapper'
import { PasswordToggleIcon } from './PasswordToggleIcon'

type ALInputEvent = ChangeEvent<HTMLInputElement>

const types: Partial<Record<InputType, InputType>> = {
  currency: 'text',
  number: 'text',
  phone: 'text',
}

const ignoredCharacterSets: Partial<Record<InputType, RegExp>> = {
  currency: /[^0-9.$,]+/g,
  number: /[^0-9.]+/g,
  phone: /[^0-9.\-()+ ]+/g,
}

function replaceCharacters(type: InputType) {
  return (event: ALInputEvent): ALInputEvent => {
    const set = ignoredCharacterSets[type]

    if (set) {
      return {
        ...event,
        target: { ...event.target, value: event.target.value.replace(set, '') },
      }
    }

    return event
  }
}

export default function Input(props: InputProps): ReactElement {
  const [isPasswordShowing, setPasswordShowing] = useState(false)

  const {
    autocomplete,
    error,
    name,
    type = 'text',
    onChange = noop,
    ...options
  } = props

  const handleChange = compose(onChange, replaceCharacters(type))

  return (
    <FormFieldWrapper {...props}>
      <InputGroup>
        <ChakraInput
          autoComplete={autocomplete ?? 'on'}
          backgroundColor={error ? 'red.200' : 'gray.200'}
          border="1px solid"
          borderColor={error ? 'red.500' : 'gray.400'}
          fontSize="md"
          id={name}
          lineHeight="1.875rem"
          name={name}
          onChange={handleChange}
          outline="none"
          px="2"
          type={isPasswordShowing ? 'text' : types[type] ?? type}
          width="full"
          {...options}
        />
        {type === 'password' && (
          <InputRightElement height="100%" mr="2">
            <PasswordToggleIcon
              fill={error ? 'red.500' : 'gray.500'}
              onClick={(): void => setPasswordShowing(prev => !prev)}
              pr="1px"
              pt="1px"
              title={`${isPasswordShowing ? 'Hide' : 'Show'} Password`}
            />
          </InputRightElement>
        )}
      </InputGroup>
    </FormFieldWrapper>
  )
}

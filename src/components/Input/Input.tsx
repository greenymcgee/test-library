import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React, { ReactElement, useState } from 'react';
import { compose, noop } from '@above-lending/prelude';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';
import { InputProps, InputType } from './Input.types';
import { PasswordToggleIcon } from './PasswordToggleIcon';

const types: Partial<Record<InputType, InputType>> = {
  currency: 'text',
  number: 'text',
  phone: 'text',
};

const ignoredCharacterSets: Partial<Record<InputType, RegExp>> = {
  currency: /[^0-9.$,]+/g,
  number: /[^0-9.]+/g,
  phone: /[^0-9.\-()+ ]+/g,
};

export default function Input(props: InputProps): ReactElement {
  const [isPasswordShowing, setPasswordShowing] = useState(false);

  const {
    autocomplete,
    error,
    name,
    type = 'text',
    onChange = noop,
    ...rest
  } = props;

  const handleChange = compose(onChange, (e) => {
    e.target.value = ignoredCharacterSets[type]
      ? e.target.value.replace(ignoredCharacterSets[type], '')
      : e.target.value;

    return e;
  });

  return (
    <FormFieldWrapper {...props}>
      <InputGroup>
        <ChakraInput
          data-testid={`${name}-input`}
          width="full"
          {...rest}
          autoComplete={autocomplete ?? 'on'}
          px="2"
          lineHeight="1.875rem"
          fontSize="md"
          id={name}
          name={name}
          onChange={handleChange}
          outline="none"
          border="1px solid"
          borderColor={error ? 'red.500' : 'gray.400'}
          backgroundColor={error ? 'red.200' : 'gray.200'}
          type={isPasswordShowing ? 'text' : types[type] ?? type}
        />
        {type === 'password' && (
          <InputRightElement height="100%" mr="2">
            <PasswordToggleIcon
              fill={error ? 'red.500' : 'gray.500'}
              onClick={(): void => setPasswordShowing((prev) => !prev)}
              pr="1px"
              pt="1px"
              title={`${isPasswordShowing ? 'Hide' : 'Show'} Password`}
            />
          </InputRightElement>
        )}
      </InputGroup>
    </FormFieldWrapper>
  );
}

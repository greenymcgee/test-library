import { Input as ChakraInput, InputGroup } from '@chakra-ui/react';
import React, { ChangeEvent, ReactElement } from 'react';
import { compose, noop } from '@above-lending/prelude';
// import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';
import { InputProps, InputType } from './Input.types';

// const types: Partial<Record<InputType, InputType>> = {
//   currency: 'text',
//   number: 'text',
//   phone: 'text',
// };

const ignoredCharacterSets: Partial<Record<InputType, RegExp>> = {
  currency: /[^0-9.$,]+/g,
  number: /[^0-9.]+/g,
  phone: /[^0-9.\-()+ ]+/g,
};

function replaceCharacters(type: InputType) {
  return (event: ChangeEvent<HTMLInputElement>): ChangeEvent => {
    const set = ignoredCharacterSets[type];

    if (set) event.target.value = event.target.value.replace(set, '');

    return event;
  };
}

export default function Input({
  autocomplete,
  name,
  type = 'text',
  onChange = noop,
  ...options
}: InputProps): ReactElement {
  // const [isPasswordShowing, setPasswordShowing] = useState(false);

  const handleChange = compose(onChange, replaceCharacters(type));

  return (
    <InputGroup>
      <ChakraInput
        autoComplete={autocomplete ?? 'on'}
        border="1px solid"
        fontSize="md"
        id={name}
        lineHeight="1.875rem"
        name={name}
        onChange={handleChange}
        outline="none"
        px="2"
        // type={isPasswordShowing ? 'text' : types[type] ?? type}
        width="full"
        {...options}
      />
      {/* {type === 'password' && (
          <InputRightElement height="100%" mr="2">
            <PasswordToggleIcon
              fill={error ? 'red.500' : 'gray.500'}
              onClick={(): void => setPasswordShowing((prev) => !prev)}
              pr="1px"
              pt="1px"
              title={`${isPasswordShowing ? 'Hide' : 'Show'} Password`}
            />
          </InputRightElement>
        )} */}
    </InputGroup>
  );
}

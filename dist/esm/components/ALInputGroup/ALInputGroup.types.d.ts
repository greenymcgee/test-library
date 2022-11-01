import { InputProps as ChakraInputProps } from '@chakra-ui/react';
import { FormFieldWrapperProps } from '../FormFieldWrapper/FormFieldWrapper.types';
export declare type ALInputType = 'currency' | 'email' | 'number' | 'password' | 'phone' | 'text';
export interface ALInputGroupProps extends FormFieldWrapperProps {
    type?: ALInputType;
    inputProps?: Omit<ChakraInputProps, 'type' | 'name'>;
}

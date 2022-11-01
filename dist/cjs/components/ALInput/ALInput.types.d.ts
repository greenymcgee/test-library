import { InputProps as ChakraInputProps, InputProps } from '@chakra-ui/react';
import { FormFieldWrapperProps } from '../FormFieldWrapper/FormFieldWrapper.types';
export declare type ALInputType = 'currency' | 'email' | 'number' | 'password' | 'phone' | 'text';
declare type InputPropsExtensions = Omit<ChakraInputProps, 'type' | 'name'> & FormFieldWrapperProps;
export interface ALInputProps extends InputPropsExtensions {
    inputProps?: Omit<InputProps, 'onChange'>;
    type?: ALInputType;
}
export {};

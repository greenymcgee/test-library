import { BoxProps, InputProps as ChakraInputProps } from '@chakra-ui/react';
import { FormFieldWrapperProps } from '../FormFieldWrapper/FormFieldWrapper.types';
export declare type InputType = 'currency' | 'email' | 'number' | 'password' | 'phone' | 'text';
declare type InputPropsExtensions = FormFieldWrapperProps & Omit<ChakraInputProps, 'type'>;
export interface InputProps extends InputPropsExtensions {
    autocomplete?: string;
    type?: InputType;
}
export interface PasswordToggleIconProps extends BoxProps {
    fill: string;
    width?: string | number;
    height?: string | number;
}
export {};

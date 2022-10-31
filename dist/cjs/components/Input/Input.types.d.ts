import { BoxProps, InputProps as ChakraInputProps } from '@chakra-ui/react';
export declare type InputType = 'currency' | 'email' | 'number' | 'password' | 'phone' | 'text';
export interface InputProps extends Omit<ChakraInputProps, 'type'> {
    autocomplete?: string;
    type?: InputType;
}
export interface PasswordToggleIconProps extends BoxProps {
    fill: string;
    width?: string | number;
    height?: string | number;
}

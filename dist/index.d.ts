import { ReactElement, PropsWithChildren, ReactNode } from 'react';
import { InputProps as InputProps$1, BoxProps } from '@chakra-ui/react';

interface ButtonProps {
    label: string;
}

declare function Button({ label }: ButtonProps): ReactElement;

interface FormFieldWrapperProps {
    error?: null | false | string;
    isRequired?: boolean;
    label: string;
    name: string;
    tooltipMessage?: string;
    secondaryLabel?: string;
    helper?: string;
}

declare function FormFieldWrapper({ children, error, isRequired, label, name, tooltipMessage, secondaryLabel, helper, ...rest }: PropsWithChildren<FormFieldWrapperProps>): ReactElement;

declare type InputType = 'currency' | 'email' | 'number' | 'password' | 'phone' | 'text';
interface InputProps extends Omit<InputProps$1, 'type'> {
    autocomplete?: string;
    type?: InputType;
}

declare function Input({ autocomplete, name, type, onChange, ...options }: InputProps): ReactElement;

interface TooltipProps extends BoxProps {
    message: string | ReactNode;
}

declare function Tooltip({ message, ...options }: TooltipProps): ReactElement;

export { Button, FormFieldWrapper, Input, Tooltip };

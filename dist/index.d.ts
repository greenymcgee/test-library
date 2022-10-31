import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { FormControlProps, InputProps as InputProps$1, BoxProps, TextProps } from '@chakra-ui/react';

interface FormFieldWrapperProps extends FormControlProps {
    error?: null | false | string;
    helperMessage?: string;
    isRequired?: boolean;
    label: string;
    name: string;
    secondaryLabel?: string;
    tooltipMessage?: string;
}

declare function FormFieldWrapper({ children, error, helperMessage, label, name, secondaryLabel, tooltipMessage, ...options }: PropsWithChildren<FormFieldWrapperProps>): ReactElement;

declare type InputType = 'currency' | 'email' | 'number' | 'password' | 'phone' | 'text';
interface InputProps extends Omit<InputProps$1, 'type' | 'name'> {
    autocomplete?: string;
    type?: InputType;
    wrapperProps: FormFieldWrapperProps;
}

declare function Input({ autocomplete, type, onChange, wrapperProps, ...options }: InputProps): ReactElement;

interface TooltipProps extends BoxProps {
    message: string | ReactNode;
}

declare function Tooltip({ message, ...options }: TooltipProps): ReactElement;

interface SecondaryLabelProps extends TextProps {
    label: string | undefined;
}

declare function SecondaryLabel({ label, ...options }: SecondaryLabelProps): ReactElement;

interface FormFieldHelperMessageProps {
    error: undefined | null | false | string;
    helperMessage: string | undefined;
}

declare function FormFieldHelperMessage({ error, helperMessage, }: FormFieldHelperMessageProps): ReactElement;

export { FormFieldHelperMessage, FormFieldWrapper, Input, SecondaryLabel, Tooltip };

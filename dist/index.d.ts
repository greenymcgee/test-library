import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { InputProps as InputProps$1, BoxProps, TextProps } from '@chakra-ui/react';

interface FormFieldWrapperProps {
    error?: null | false | string;
    isRequired?: boolean;
    label: string;
    name: string;
    tooltipMessage?: string;
    secondaryLabel?: string;
    helper?: string;
}

declare function FormFieldWrapper({ children, error, isRequired, label, name, tooltipMessage, secondaryLabel, helper, ...options }: PropsWithChildren<FormFieldWrapperProps>): ReactElement;

declare type InputType = 'currency' | 'email' | 'number' | 'password' | 'phone' | 'text';
declare type InputPropsExtensions = FormFieldWrapperProps & Omit<InputProps$1, 'type'>;
interface InputProps extends InputPropsExtensions {
    autocomplete?: string;
    type?: InputType;
}

declare function Input(props: InputProps): ReactElement;

interface TooltipProps extends BoxProps {
    message: string | ReactNode;
}

declare function Tooltip({ message, ...options }: TooltipProps): ReactElement;

interface SecondaryLabelProps extends TextProps {
    label: string | undefined;
}

declare function SecondaryLabel({ label, ...options }: SecondaryLabelProps): ReactElement;

export { FormFieldWrapper, Input, SecondaryLabel, Tooltip };

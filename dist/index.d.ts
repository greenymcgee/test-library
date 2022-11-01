import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { InputProps, BoxProps, TextProps } from '@chakra-ui/react';

interface FormFieldWrapperProps {
    error?: null | false | string;
    helperMessage?: string;
    isRequired?: boolean;
    label: string;
    name: string;
    secondaryLabel?: string;
    tooltipMessage?: string;
}

declare function FormFieldWrapper({ children, error, helperMessage, label, name, secondaryLabel, tooltipMessage, ...options }: PropsWithChildren<FormFieldWrapperProps>): ReactElement;

declare type ALInputType = 'currency' | 'email' | 'number' | 'password' | 'phone' | 'text';
interface ALInputGroupProps extends FormFieldWrapperProps {
    type?: ALInputType;
    inputProps?: Omit<InputProps, 'type' | 'name'>;
}

declare function ALInputGroup({ error, label, name, type, inputProps, ...options }: ALInputGroupProps): ReactElement;

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

export { ALInputGroup, FormFieldHelperMessage, FormFieldWrapper, SecondaryLabel, Tooltip };

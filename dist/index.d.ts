import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { FormControlProps, InputProps, BoxProps, TextProps } from '@chakra-ui/react';

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

declare type ALInputType = 'currency' | 'email' | 'number' | 'password' | 'phone' | 'text';
declare type InputPropsExtensions = Omit<InputProps, 'type' | 'name'> & Pick<FormFieldWrapperProps, 'name' | 'label' | 'error'>;
interface ALInputProps extends InputPropsExtensions {
    type?: ALInputType;
    wrapperProps?: Omit<FormFieldWrapperProps, 'name' | 'label' | 'error'>;
}

declare function ALInput({ autoComplete, error, label, name, type, onChange, wrapperProps, ...options }: ALInputProps): ReactElement;

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

export { ALInput, FormFieldHelperMessage, FormFieldWrapper, SecondaryLabel, Tooltip };

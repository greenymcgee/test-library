import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { InputProps, BoxProps, TextProps } from '@chakra-ui/react';

interface ALFieldsetProps {
    error?: null | false | string;
    helperText?: string;
    isRequired?: boolean;
    label: string;
    name: string;
    secondaryLabel?: string;
    tooltipMessage?: string;
}

declare function ALFieldset({ children, error, helperText, label, name, secondaryLabel, tooltipMessage, ...options }: PropsWithChildren<ALFieldsetProps>): ReactElement;

declare type ALInputType = 'currency' | 'email' | 'number' | 'password' | 'phone' | 'text';
interface ALInputGroupProps extends ALFieldsetProps {
    type?: ALInputType;
    inputProps?: Omit<InputProps, 'type' | 'name'>;
}

declare function ALInputGroup({ error, label, name, type, inputProps, ...options }: ALInputGroupProps): ReactElement;

interface TooltipProps extends BoxProps {
    message: string | ReactNode;
}

declare function Tooltip({ message, ...options }: TooltipProps): ReactElement;

interface ALFieldsetSecondaryLabelProps extends TextProps {
    label: string | undefined;
}

declare function ALFieldsetSecondaryLabel({ label, ...options }: ALFieldsetSecondaryLabelProps): ReactElement;

interface ALFieldsetBelowControlProps {
    error: ALFieldsetProps['error'];
    helperText: ALFieldsetProps['helperText'];
}

declare function ALFieldsetBelowControl({ error, helperText, }: ALFieldsetBelowControlProps): ReactElement;

export { ALFieldset, ALFieldsetBelowControl, ALFieldsetSecondaryLabel, ALInputGroup, Tooltip };

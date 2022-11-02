import { PropsWithChildren, ReactElement } from 'react';
import { FormFieldWrapperProps } from './FormFieldWrapper.types';
export default function FormFieldWrapper({ children, error, helperText, label, name, secondaryLabel, tooltipMessage, ...options }: PropsWithChildren<FormFieldWrapperProps>): ReactElement;

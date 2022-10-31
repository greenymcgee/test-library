import { PropsWithChildren, ReactElement } from 'react';
import { FormFieldWrapperProps } from './FormFieldWrapper.types';
export default function FormFieldWrapper({ children, error, isRequired, label, name, tooltipMessage, secondaryLabel, helper, ...options }: PropsWithChildren<FormFieldWrapperProps>): ReactElement;

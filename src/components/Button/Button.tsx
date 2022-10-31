import React, { ReactElement } from 'react';
import { ButtonProps } from './Button.types';

export default function Button({ label }: ButtonProps): ReactElement {
  return <button>{label}</button>;
}

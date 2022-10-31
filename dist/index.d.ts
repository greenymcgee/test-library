import { ReactElement } from 'react';

interface ButtonProps {
    label: string;
}

declare function Button({ label }: ButtonProps): ReactElement;

export { Button };

import { BoxProps } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { ALInputType } from './ALInputGroup.types';
interface PasswordToggleIconProps {
    ariaLabel: BoxProps['aria-label'];
    fill: BoxProps['fill'];
    onClick: VoidFunction;
    type: ALInputType;
}
export declare function PasswordToggleIcon({ ariaLabel, fill, onClick, type, }: PasswordToggleIconProps): ReactElement;
export {};

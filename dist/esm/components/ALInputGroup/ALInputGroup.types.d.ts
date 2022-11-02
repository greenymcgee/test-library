import { InputProps } from '@chakra-ui/react';
import { ALFieldsetProps } from '../ALFieldset/ALFieldset.types';
export declare type ALInputType = 'currency' | 'email' | 'number' | 'password' | 'phone' | 'text';
export interface ALInputGroupProps extends ALFieldsetProps {
    type?: ALInputType;
    inputProps?: Omit<InputProps, 'type' | 'name'>;
}

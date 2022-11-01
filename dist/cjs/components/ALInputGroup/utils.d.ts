import { ChangeEvent } from 'react';
import { FormFieldWrapperProps } from '../FormFieldWrapper/FormFieldWrapper.types';
import { ALInputType } from './ALInputGroup.types';
declare type CharacterEvent = ChangeEvent<HTMLInputElement>;
export declare const inputCharacterTypes: Partial<Record<ALInputType, ALInputType>>;
export declare function removeIgnoredInputCharacters(type: ALInputType): (event: CharacterEvent) => CharacterEvent;
export declare function inputStyles(error: FormFieldWrapperProps['error']): {
    inputBackgroundColor: string;
    inputBorderColor: string;
    toggleIconFill: string;
};
export declare function inputType(isPasswordShowing: boolean, type: ALInputType): ALInputType;
export declare function inputAutoComplete(autoComplete: string | undefined): string;
export declare function togglePasswordShowing(showing: boolean): boolean;
export {};

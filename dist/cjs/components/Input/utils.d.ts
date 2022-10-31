import { ChangeEvent } from 'react';
import { FormFieldWrapperProps } from '../FormFieldWrapper/FormFieldWrapper.types';
import { InputType } from './Input.types';
declare type CharacterEvent = ChangeEvent<HTMLInputElement>;
export declare const inputCharacterTypes: Partial<Record<InputType, InputType>>;
export declare function removeIgnoredInputCharacters(type: InputType): (event: CharacterEvent) => CharacterEvent;
export declare function inputStyles(error: FormFieldWrapperProps['error']): {
    inputBackgroundColor: string;
    inputBorderColor: string;
    toggleIconFill: string;
};
export declare function inputType(isPasswordShowing: boolean, type: InputType): InputType;
export declare function inputAutoComplete(autoComplete: string | undefined): string;
export declare function togglePasswordShowing(showing: boolean): boolean;
export {};

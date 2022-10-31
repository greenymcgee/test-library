import { ChangeEvent } from 'react';
import { InputType } from './Input.types';
declare type CharacterEvent = ChangeEvent<HTMLInputElement>;
export declare const inputCharacterTypes: Partial<Record<InputType, InputType>>;
export declare function removeIgnoredInputCharacters(type: InputType): (event: CharacterEvent) => CharacterEvent;
export {};

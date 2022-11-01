import { ChangeEvent } from 'react'
import { FormFieldWrapperProps } from '../FormFieldWrapper/FormFieldWrapper.types'
import { ALInputType } from './ALInput.types'

type CharacterEvent = ChangeEvent<HTMLInputElement>

export const inputCharacterTypes: Partial<Record<ALInputType, ALInputType>> = {
  currency: 'text',
  number: 'text',
  phone: 'text',
}

const ignoredCharacterSets: Partial<Record<ALInputType, RegExp>> = {
  currency: /[^0-9.$,]+/g,
  number: /[^0-9.]+/g,
  phone: /[^0-9.\-()+ ]+/g,
}

export function removeIgnoredInputCharacters(type: ALInputType) {
  return (event: CharacterEvent): CharacterEvent => {
    const set = ignoredCharacterSets[type]

    if (set) {
      return {
        ...event,
        target: { ...event.target, value: event.target.value.replace(set, '') },
      }
    }

    return event
  }
}

export function inputStyles(error: FormFieldWrapperProps['error']): {
  inputBackgroundColor: string
  inputBorderColor: string
  toggleIconFill: string
} {
  if (error) {
    return {
      inputBackgroundColor: 'red.200',
      inputBorderColor: 'red.500',
      toggleIconFill: 'red.500',
    }
  }

  return {
    inputBackgroundColor: 'gray.200',
    inputBorderColor: 'gray.400',
    toggleIconFill: 'gray.500',
  }
}

export function inputType(
  isPasswordShowing: boolean,
  type: ALInputType,
): ALInputType {
  if (isPasswordShowing) return 'text'

  return inputCharacterTypes[type] ?? type
}

export function inputAutoComplete(autoComplete: string | undefined): string {
  return autoComplete ?? 'on'
}

export function togglePasswordShowing(showing: boolean): boolean {
  return !showing
}
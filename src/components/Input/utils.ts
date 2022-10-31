import { ChangeEvent } from 'react'
import { InputType } from './Input.types'

type CharacterEvent = ChangeEvent<HTMLInputElement>

export const inputCharacterTypes: Partial<Record<InputType, InputType>> = {
  currency: 'text',
  number: 'text',
  phone: 'text',
}

const ignoredCharacterSets: Partial<Record<InputType, RegExp>> = {
  currency: /[^0-9.$,]+/g,
  number: /[^0-9.]+/g,
  phone: /[^0-9.\-()+ ]+/g,
}

export function removeIgnoredInputCharacters(type: InputType) {
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

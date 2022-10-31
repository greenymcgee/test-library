import { ChangeEvent } from 'react'
import {
  inputAutoComplete,
  inputStyles,
  inputType,
  removeIgnoredInputCharacters,
  togglePasswordShowing,
} from '../utils'

describe('Input utils', () => {
  describe('removeIgnoredInputCharacters', () => {
    it('should return the event if the type does not match any ignoredCharacterSets', () => {
      const event = {
        target: { value: 'ted' },
      } as ChangeEvent<HTMLInputElement>
      const result = removeIgnoredInputCharacters('password')(event)
      expect(result.target.value).toBe(event.target.value)
    })

    it('should remove any unwanted characters from currency', () => {
      const event = {
        target: { value: '$1,000!' },
      } as ChangeEvent<HTMLInputElement>
      const result = removeIgnoredInputCharacters('currency')(event)
      expect(result.target.value).toBe('$1,000')
    })

    it('should remove any letters if the type is number', () => {
      const event = {
        target: { value: 'ab123' },
      } as ChangeEvent<HTMLInputElement>
      const result = removeIgnoredInputCharacters('number')(event)
      expect(result.target.value).toBe('123')
    })

    it('should remove any dashes or spaces if the type is phone', () => {
      const event = {
        target: { value: '555-555 5123' },
      } as ChangeEvent<HTMLInputElement>
      const result = removeIgnoredInputCharacters('number')(event)
      expect(result.target.value).toBe('5555555123')
    })
  })

  describe('inputStyles', () => {
    it('should return error styles if the error is given', () => {
      const result = inputStyles('yo')
      expect(result).toEqual({
        inputBackgroundColor: 'red.200',
        inputBorderColor: 'red.500',
        toggleIconFill: 'red.500',
      })
    })

    it('should return default styles without the error', () => {
      const result = inputStyles(undefined)
      expect(result).toEqual({
        inputBackgroundColor: 'gray.200',
        inputBorderColor: 'gray.400',
        toggleIconFill: 'gray.500',
      })
    })
  })

  describe('inputType', () => {
    it('should return "text" if the password is showing', () => {
      const result = inputType(true, 'password')
      expect(result).toEqual('text')
    })

    it('should return an inputCharacterType if the given type matches', () => {
      let result = inputType(false, 'currency')
      expect(result).toEqual('text')
      result = inputType(false, 'number')
      expect(result).toEqual('text')
      result = inputType(false, 'phone')
      expect(result).toEqual('text')
    })

    it('should return the given type if no inputCharacterType matches', () => {
      const result = inputType(false, 'password')
      expect(result).toEqual('password')
    })
  })

  describe('inputAutoComplete', () => {
    it('should return the given autoComplete', () => {
      const result = inputAutoComplete('off')
      expect(result).toBe('off')
    })

    it('should return a default of "on"', () => {
      const result = inputAutoComplete(undefined)
      expect(result).toBe('on')
    })
  })

  describe('togglePasswordShowing', () => {
    it('should flip the boolean', () => {
      const result = togglePasswordShowing(true)
      expect(result).toEqual(false)
    })
  })
})

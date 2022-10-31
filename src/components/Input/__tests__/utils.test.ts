import { ChangeEvent } from 'react'
import { removeIgnoredInputCharacters } from '../utils'

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
})

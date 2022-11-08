import { getMarginBottom } from '../utils'

describe('ALFieldsetBelowControl utils', () => {
  describe('getMarginBottom', () => {
    it('should return margin bottom of 2 if text is present', () => {
      const result = getMarginBottom(true)
      expect(result).toBe(3)
    })

    it('should return undefined if text is not present', () => {
      const result = getMarginBottom(false)
      expect(result).toBeUndefined()
    })
  })
})

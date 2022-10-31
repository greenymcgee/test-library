import { render, screen } from '@testing-library/react'
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Simulate } from 'react-dom/test-utils'
import Input from '../Input'

const onChange = jest.fn()

describe('Input', () => {
  it('should render the input', async () => {
    render(
      <Input
        onChange={onChange}
        wrapperProps={{ label: 'bill', name: 'Bill' }}
      />,
    )
    const input = screen.getByTestId('Bill-input')
    expect(input).toBeVisible()
    Simulate.change(input)
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})

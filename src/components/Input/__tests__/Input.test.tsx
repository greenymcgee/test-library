import { render, screen } from '@testing-library/react'
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Simulate } from 'react-dom/test-utils'
import Input from '..'

const onChange = jest.fn()

describe('Input', () => {
  it('should render the input', async () => {
    render(<Input wrapperProps={{ label: 'bill', name: 'Bill' }} />)
    const input = screen.getByTestId('Bill-input')
    expect(input).toBeVisible()
  })

  it('should provide a default for autoComplete', async () => {
    render(<Input wrapperProps={{ label: 'bill', name: 'Bill' }} />)
    const input = screen.getByTestId('Bill-input')
    expect(input.getAttribute('autocomplete')).toBe('on')
  })

  it('should pass the autoComplete prop', async () => {
    render(
      <Input
        autoComplete="off"
        wrapperProps={{ label: 'bill', name: 'Bill' }}
      />,
    )
    const input = screen.getByTestId('Bill-input')
    expect(input.getAttribute('autocomplete')).toBe('off')
  })

  it('should pass the type prop', async () => {
    render(
      <Input type="email" wrapperProps={{ label: 'bill', name: 'Bill' }} />,
    )
    const input = screen.getByTestId('Bill-input')
    expect(input.getAttribute('type')).toBe('email')
  })

  it('should pass the onChange prop', async () => {
    render(
      <Input
        onChange={onChange}
        wrapperProps={{ label: 'bill', name: 'Bill' }}
      />,
    )
    const input = screen.getByTestId('Bill-input')
    Simulate.change(input)
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})

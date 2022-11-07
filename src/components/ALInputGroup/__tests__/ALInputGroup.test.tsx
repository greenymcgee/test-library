import { act, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Simulate } from 'react-dom/test-utils'
import ALInputGroup from '..'
import { ALInputGroupProps } from '../ALInputGroup.types'

const onChange = jest.fn()

const props: ALInputGroupProps = { label: 'First Name', name: 'first-name' }
const testId = `${props.name}-input`

describe('ALInputGroup', () => {
  it('should render the input', () => {
    render(<ALInputGroup {...props} />)
    const input = screen.getByTestId(testId)
    expect(input).toBeVisible()
    expect(input.getAttribute('id')).toBe(props.name)
    expect(input.getAttribute('name')).toBe(props.name)
    expect(input.getAttribute('autocomplete')).toBe('on')
    expect(input.getAttribute('type')).toBe('text')
  })

  it('should pass the autoComplete prop', () => {
    render(<ALInputGroup inputProps={{ autoComplete: 'off' }} {...props} />)
    const input = screen.getByTestId(testId)
    expect(input.getAttribute('autocomplete')).toBe('off')
  })

  it('should pass the type prop', () => {
    render(<ALInputGroup type="email" {...props} />)
    const input = screen.getByTestId(testId)
    expect(input.getAttribute('type')).toBe('email')
  })

  it('should show password show/hide toggle', () => {
    render(<ALInputGroup type="password" {...props} />)
    const input = screen.getByTestId(testId)
    expect(input.getAttribute('type')).toBe('password')
    act(() => {
      fireEvent.click(screen.getByLabelText('Show Password'))
    })
    expect(input.getAttribute('type')).toBe('text')
    expect(screen.getByLabelText('Hide Password')).toBeVisible()
  })

  it('should call the given onChange when a change occurs', () => {
    render(<ALInputGroup inputProps={{ onChange }} {...props} />)
    const input = screen.getByTestId(testId)
    act(() => {
      Simulate.change(input)
    })
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})

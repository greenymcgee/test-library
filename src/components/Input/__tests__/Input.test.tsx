import { act, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Simulate } from 'react-dom/test-utils'
import Input from '..'
import { InputProps } from '../Input.types'

const onChange = jest.fn()

const props: InputProps = { label: 'First Name', name: 'first-name' }
const testId = `${props.name}-input`

describe('Input', () => {
  it('should render the input', () => {
    render(<Input {...props} />)
    const input = screen.getByTestId(testId)
    expect(input).toBeVisible()
    expect(input.getAttribute('id')).toBe(props.name)
    expect(input.getAttribute('name')).toBe(props.name)
  })

  it('should provide a default for autoComplete', () => {
    render(<Input {...props} />)
    const input = screen.getByTestId(testId)
    expect(input.getAttribute('autocomplete')).toBe('on')
  })

  it('should pass the autoComplete prop', () => {
    render(<Input autoComplete="off" {...props} />)
    const input = screen.getByTestId(testId)
    expect(input.getAttribute('autocomplete')).toBe('off')
  })

  it('should pass the type prop', () => {
    render(<Input type="email" {...props} />)
    const input = screen.getByTestId(testId)
    expect(input.getAttribute('type')).toBe('email')
  })

  it('should show password show/hide toggle', () => {
    render(<Input type="password" {...props} />)
    const input = screen.getByTestId(testId)
    expect(input.getAttribute('type')).toBe('password')
    act(() => {
      fireEvent.click(screen.getByLabelText('Show Password'))
    })
    expect(screen.getByLabelText('Hide Password')).toBeVisible()
  })

  it('should pass the onChange prop', () => {
    render(<Input onChange={onChange} {...props} />)
    const input = screen.getByTestId(testId)
    act(() => {
      Simulate.change(input)
    })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('should pass the wrapperProps prop', () => {
    render(<Input wrapperProps={{ 'aria-label': 'A test label' }} {...props} />)
    expect(screen.getByLabelText('A test label')).toBeVisible()
  })
})

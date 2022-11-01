import { act, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Simulate } from 'react-dom/test-utils'
import ALInput from '..'
import { ALInputProps } from '../ALInput.types'

const onChange = jest.fn()

const props: ALInputProps = { label: 'First Name', name: 'first-name' }
const testId = `${props.name}-input`

describe('ALInput', () => {
  it('should render the input', () => {
    render(<ALInput {...props} />)
    const input = screen.getByTestId(testId)
    expect(input).toBeVisible()
    expect(input.getAttribute('id')).toBe(props.name)
    expect(input.getAttribute('name')).toBe(props.name)
  })

  it('should provide a default for autoComplete', () => {
    render(<ALInput {...props} />)
    const input = screen.getByTestId(testId)
    expect(input.getAttribute('autocomplete')).toBe('on')
  })

  it('should pass the autoComplete prop', () => {
    render(<ALInput autoComplete="off" {...props} />)
    const input = screen.getByTestId(testId)
    expect(input.getAttribute('autocomplete')).toBe('off')
  })

  it('should pass the type prop', () => {
    render(<ALInput type="email" {...props} />)
    const input = screen.getByTestId(testId)
    expect(input.getAttribute('type')).toBe('email')
  })

  it('should show password show/hide toggle', () => {
    render(<ALInput type="password" {...props} />)
    const input = screen.getByTestId(testId)
    expect(input.getAttribute('type')).toBe('password')
    act(() => {
      fireEvent.click(screen.getByLabelText('Show Password'))
    })
    expect(screen.getByLabelText('Hide Password')).toBeVisible()
  })

  it('should pass the onChange prop', () => {
    render(<ALInput onChange={onChange} {...props} />)
    const input = screen.getByTestId(testId)
    act(() => {
      Simulate.change(input)
    })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('should pass the wrapperProps prop', () => {
    render(
      <ALInput wrapperProps={{ 'aria-label': 'A test label' }} {...props} />,
    )
    expect(screen.getByLabelText('A test label')).toBeVisible()
  })
})

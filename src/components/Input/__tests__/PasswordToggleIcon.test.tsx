import { InputGroup } from '@chakra-ui/react'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { PasswordToggleIcon } from '../PasswordToggleIcon'

const setPasswordShowing = jest.fn()

afterEach(() => {
  setPasswordShowing.mockReset()
})

describe('PasswordToggleIcon', () => {
  it('should not render if the type is not "password"', () => {
    render(
      <PasswordToggleIcon
        error={undefined}
        isPasswordShowing={false}
        setPasswordShowing={setPasswordShowing}
        type="currency"
      />,
      { wrapper: InputGroup },
    )
    expect(screen.queryByText('Show Password')).toBeNull()
  })

  it('should render with the "Show Password" label initially', () => {
    render(
      <PasswordToggleIcon
        error={undefined}
        isPasswordShowing={false}
        setPasswordShowing={setPasswordShowing}
        type="password"
      />,
      { wrapper: InputGroup },
    )
    expect(screen.getByLabelText('Show Password')).toBeVisible()
  })

  it('should render with the "Hide Password" label if isPasswordShowing is true', () => {
    render(
      <PasswordToggleIcon
        error={undefined}
        isPasswordShowing
        setPasswordShowing={setPasswordShowing}
        type="password"
      />,
      { wrapper: InputGroup },
    )
    expect(screen.getByLabelText('Hide Password')).toBeVisible()
  })

  it('should toggle the isPasswordShowing boolean upon click', () => {
    render(
      <PasswordToggleIcon
        error={undefined}
        isPasswordShowing
        setPasswordShowing={setPasswordShowing}
        type="password"
      />,
      { wrapper: InputGroup },
    )

    fireEvent.click(screen.getByRole('button', { name: 'Hide Password' }))
    expect(setPasswordShowing).toHaveBeenCalledTimes(1)
  })
})

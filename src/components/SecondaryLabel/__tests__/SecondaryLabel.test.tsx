import { render, screen } from '@testing-library/react'
import React from 'react'
import SecondaryLabel from '../SecondaryLabel'

describe('SecondaryLabel', () => {
  it('should render a label if given', () => {
    const label = 'bill'
    render(<SecondaryLabel label={label} />)
    expect(screen.getByTestId('secondary-label').textContent).toBe(
      ` - ${label}`,
    )
  })

  it('should render empty container without label', () => {
    render(<SecondaryLabel label={undefined} />)
    expect(screen.queryByTestId('secondary-label')).toBeNull()
  })
})

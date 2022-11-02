import { render, screen } from '@testing-library/react'
import React from 'react'
import ALFieldsetSecondaryLabel from '..'

describe('ALFieldsetSecondaryLabel', () => {
  it('should render a label if given', () => {
    const label = 'bill'
    render(<ALFieldsetSecondaryLabel label={label} />)
    expect(screen.getByTestId('secondary-label').textContent).toBe(
      ` - ${label}`,
    )
  })

  it('should render empty container without label', () => {
    render(<ALFieldsetSecondaryLabel label={undefined} />)
    expect(screen.queryByTestId('secondary-label')).toBeNull()
  })
})

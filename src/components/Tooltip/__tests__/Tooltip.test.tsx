import { render, screen } from '@testing-library/react'
import React from 'react'
import Tooltip from '..'

describe('Tooltip', () => {
  it('should render when a message is given', () => {
    const message = 'message'
    render(<Tooltip message={message} />)
    expect(screen.getByAltText('tooltip')).toBeVisible()
  })

  it('should not render without a message', () => {
    const { container } = render(<Tooltip message={undefined} />)
    expect(container.firstChild).toBeNull()
  })
})

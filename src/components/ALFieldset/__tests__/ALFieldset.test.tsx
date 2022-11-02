import { render, screen } from '@testing-library/react'
import React from 'react'
import ALFieldset from '..'
import { ALFieldsetProps } from '../ALFieldset.types'

const props: ALFieldsetProps = {
  label: 'Bill the Label',
  name: 'bill',
}

describe('ALFieldset', () => {
  it('should render a label only by default', () => {
    render(<ALFieldset label={props.label} name={props.name} />)
    const label = screen.getByText(props.label)
    expect(label).toBeVisible()
    expect(label.getAttribute('for')).toBe(props.name)
  })

  it('should render children', () => {
    render(
      <ALFieldset label={props.label} name={props.name}>
        hello
      </ALFieldset>,
    )
    expect(screen.getByText('hello')).toBeVisible()
  })
})

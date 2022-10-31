import { PropsOf } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import React from 'react'
import FormFieldWrapper from '..'

const props: PropsOf<typeof FormFieldWrapper> = {
  label: 'Bill the Label',
  name: 'bill',
}

describe('FormFieldWrapper', () => {
  it('should render a label only by default', () => {
    render(<FormFieldWrapper label={props.label} name={props.name} />)
    const label = screen.getByText(props.label)
    expect(label).toBeVisible()
    expect(label.getAttribute('for')).toBe(props.name)
  })

  it('should render children', () => {
    render(
      <FormFieldWrapper label={props.label} name={props.name}>
        hello
      </FormFieldWrapper>,
    )
    expect(screen.getByText('hello')).toBeVisible()
  })
})

import { FormControl } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import React from 'react'
import ALFieldsetBelowControl from '..'
import { ALFieldsetBelowControlProps } from '../ALFieldsetBelowControl.type'

const props: ALFieldsetBelowControlProps = {
  error: 'an error',
  helperText: 'help me',
}

describe('ALFieldsetBelowControl', () => {
  it('should render an error first if one was given', () => {
    render(
      <FormControl isInvalid>
        <ALFieldsetBelowControl
          error={props.error}
          helperText={props.helperText}
        />
      </FormControl>,
    )
    expect(screen.getByText(props.error as string)).toBeVisible()
    expect(
      screen.queryByText(props.helperText as string),
    ).not.toBeInTheDocument()
  })

  it('should render a helper message if one is given, but no error', () => {
    render(
      <FormControl isInvalid={false}>
        <ALFieldsetBelowControl error={null} helperText={props.helperText} />
      </FormControl>,
    )
    expect(screen.getByText(props.helperText as string)).toBeVisible()
  })
})

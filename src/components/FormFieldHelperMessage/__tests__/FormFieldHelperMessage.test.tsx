import { FormControl, PropsOf } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import React from 'react'
import FormFieldHelperMessage from '..'

const props: PropsOf<typeof FormFieldHelperMessage> = {
  error: 'an error',
  helperMessage: 'help me',
}

describe('FormFieldHelperMessage', () => {
  it('should render an error first if one was given', () => {
    render(
      <FormControl isInvalid>
        <FormFieldHelperMessage
          error={props.error}
          helperMessage={props.helperMessage}
        />
      </FormControl>,
    )
    expect(screen.getByText(props.error as string)).toBeVisible()
    expect(
      screen.queryByText(props.helperMessage as string),
    ).not.toBeInTheDocument()
  })

  it('should render a helper message if one is given, but no error', () => {
    render(
      <FormControl isInvalid={false}>
        <FormFieldHelperMessage
          error={null}
          helperMessage={props.helperMessage}
        />
      </FormControl>,
    )
    expect(screen.getByText(props.helperMessage as string)).toBeVisible()
  })
})

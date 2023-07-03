import React from 'react'
import { render } from '@testing-library/react'
import { RequestError } from 'src/api/httpClient'
import { getErrorMessage } from './errors'

it('test getMessage fuction', () => {
  // Test first render and componentDidMount
  const error: RequestError = { name: 'Error', message: 'Hello', response: { message: 'Hello error message' } }
  expect(getErrorMessage(error)).toBe('Hello error message')

  const errorWithoutResponse: RequestError = { name: 'Error', message: 'Hello' }
  expect(getErrorMessage(errorWithoutResponse)).toBe('Hello')
})

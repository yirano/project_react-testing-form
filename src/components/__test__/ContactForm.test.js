import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ContactForm from '../ContactForm'
import { act } from 'react-dom/test-utils'

test("renders Contact form", async () => {
  const { getByText } = render(<ContactForm />)
  const button = getByText(/submit/i);
  const firstName = getByText(/first Name/i)
  console.log(document.body.pre);
  act(() => {
    fireEvent.click(button)
  })

  expect(firstName).toHaveValue(/bill/i)

})
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '../ContactForm'
import { act } from 'react-dom/test-utils';

test('Renders form', async () => {
  // Arrange
  const { getByText, getByPlaceholderText, getByTestId } = render(<ContactForm />)
  const bogeyFirstName = "Tiffany"
  const bogeyLastName = "Arellano"
  const bogeyEmail = "tiffany.arellano@outlook.com"
  const firstName = getByPlaceholderText('bill')
  const lastName = getByTestId('lastName')
  const email = getByTestId('email')
  const button = getByTestId('submit')
  // const print = getByTestId('print-out')

  firstName.innerHTML = bogeyFirstName
  lastName.innerHTML = bogeyLastName
  email.innerHTML = bogeyEmail
  // Act
  fireEvent.click(button)
  // Assert

  // expect(print).toBeTruthy();
  // expect(firstName).toBeTruthy();
  expect(firstName).toHaveTextContent(bogeyFirstName)
})
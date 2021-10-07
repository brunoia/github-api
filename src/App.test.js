import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders devsamurai message', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/API/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

test('contains -William Paul Thurston', () => {
  render(<Quote />);
  const linkElement = screen.getByText(/-William Paul Thurston/i);
  expect(linkElement).toBeInTheDocument();

  // const paragraphTag = screen.getByRole("paragraph");
  // expect(paragraphTag).toBeInTheDocument();
});

test('Contain button element', () => {
  render(<Calculator />);
  const buttonElement = screen.getByRole("button", {
    name: "AC"
  })
  expect(buttonElement).toBeInTheDocument();
})


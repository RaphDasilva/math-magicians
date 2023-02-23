import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom';

test('expect home component to match snapshot', () => {
  const view = renderer.create(<Calculator />).toJSON();
  expect(view).toMatchSnapshot();
});

test('renders button tag', () => {
  render(<Calculator />);
  const linkElement = screen.getByRole('button', { name: 'AC' });
  expect(linkElement).toBeInTheDocument();
});

test('renders Ac in the UI', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Ac in the UI', () => {
  render(<Calculator />);
  const linkElement = screen.getByText('7');
  expect(linkElement).toBeInTheDocument();
});

test('should update the state when a button is clicked', () => {
  const { getByText } = render(<Calculator />);
  const button = getByText('7');
  fireEvent.click(button);
  expect(getByText('7')).toBeInTheDocument();
});

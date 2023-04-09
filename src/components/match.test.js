import { render, screen } from '@testing-library/react';
import {
  matchComponent,
  updateButton,
  finishButton
} from './shared';
import { Match } from './match';

test('should render toolbar component correctly', () => {
  render(<Match />);
  expect(screen.getByTestId(matchComponent)).toBeInTheDocument();
});

test('should update the score when update button clicked', () => {
  render(<Match />);
});

test('should finish match when finish button clicked', () => {
  render(<Match />);
});
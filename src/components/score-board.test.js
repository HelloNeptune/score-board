import { render, screen } from '@testing-library/react';
import { scoreBoardComponent } from './shared';
import ScoreBoard from './score-board';

test('should render ScoreBoard component correctly', () => {
  render(<ScoreBoard />);
  expect(screen.getByTestId(scoreBoardComponent)).toBeInTheDocument();
});

test('should sort and render the given matches by their scores', () => {
  render(<ScoreBoard />);
});

test('should show error message if there is onging matches', () => {
  render(<ScoreBoard />);
});
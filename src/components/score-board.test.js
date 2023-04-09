import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  scoreBoardComponent,
  showSummaryButton,
  errorMessage,
  score
} from '../shared';
import { ScoreBoard } from './score-board';

test('should render ScoreBoard component correctly', () => {
  render(<ScoreBoard />);
  expect(screen.getByTestId(scoreBoardComponent)).toBeInTheDocument();
});

test('should sort and render the given matches by their scores', () => {
  render(<ScoreBoard matches={[
    {
      id: 'f5cbf1ccb6f15',
      home: 'Arsenal',
      away: 'Chelsea',
      score: [1, 0],
      finished: true
    },
    {
      id: '359ca7cb7fbe1',
      home: 'Arsenal',
      away: 'Chelsea',
      score: [3, 2],
      finished: true
    }
  ]} />);

  const showSummaryButtonElement = screen.getByTestId(showSummaryButton);
  userEvent.click(showSummaryButtonElement);

  const scores = screen.getAllByTestId(score);

  expect(scores[0]).toHaveTextContent('Arsenal');
  expect(scores[1]).toHaveTextContent('Chelsea');
});

test('should show error message if there is any onging matches', () => {
  render(<ScoreBoard matches={[
    {
      id: 'f5cbf1ccb6f15',
      home: 'Arsenal',
      away: 'Chelsea',
      score: [1, 0],
      finished: true
    },
    {
      id: '359ca7cb7fbe1',
      home: 'Arsenal',
      away: 'Chelsea',
      score: [3, 2],
      finished: false
    }
  ]} />);

  const showSummaryButtonElement = screen.getByTestId(showSummaryButton);
  userEvent.click(showSummaryButtonElement);

  expect(screen.getByTestId(errorMessage)).toBeInTheDocument();
});
import { render, screen, within } from '@testing-library/react';
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
  render(<ScoreBoard
    setAllFinish={jest.fn()}
    matches={[
      {
        home: 'Arsenal',
        away: 'Chelsea',
        score: [1, 0],
        createdAt: 1681126293806,
        finished: true
      },
      {
        home: 'AC Milan',
        away: 'Real Madrid',
        score: [3, 3],
        createdAt: 1681126298160,
        finished: true
      },
      {
        home: 'Barcelona',
        away: 'PSG',
        score: [6, 0],
        createdAt: 1681126302623,
        finished: true
      }
    ]}
  />);

  const showSummaryButtonElement = screen.getByTestId(showSummaryButton);
  userEvent.click(showSummaryButtonElement);

  const scores = screen.getAllByTestId(score);
  expect(scores[0]).toHaveTextContent(/Barcelona: 6 - PSG: 0/i)
  expect(scores[1]).toHaveTextContent(/AC Milan: 3 - Real Madrid: 3/i)
  expect(scores[2]).toHaveTextContent(/Arsenal: 1 - Chelsea: 0/i)
});

test('should show error message if there is any onging matches', () => {
  render(<ScoreBoard matches={[
    {
      home: 'Arsenal',
      away: 'Chelsea',
      score: [1, 0],
      createdAt: 1681126307203,
      finished: true
    },
    {
      home: 'AC Milan',
      away: 'Real Madrid',
      score: [3, 2],
      createdAt: 1681126298160,
      finished: false
    }
  ]} />);

  const showSummaryButtonElement = screen.getByTestId(showSummaryButton);
  userEvent.click(showSummaryButtonElement);

  const { getByText } = within(screen.getByTestId(errorMessage))
  expect(getByText('All matches should finish before getting the summary!')).toBeInTheDocument()
});

test('should show error message if there is no matches', () => {
  render(<ScoreBoard matches={[]} />);

  const showSummaryButtonElement = screen.getByTestId(showSummaryButton);
  userEvent.click(showSummaryButtonElement);

  const { getByText } = within(screen.getByTestId(errorMessage))
  expect(getByText('There is no competition in history!')).toBeInTheDocument()
});
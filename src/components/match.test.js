import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  matchItem,
  updateHomeTeamButton,
  updateAwayTeamButton,
  finishButton,
  TEST_DATE
} from '../shared';
import { Match } from './match';

beforeEach(() => {
  jest.useRealTimers();
})

test('should render toolbar component correctly', () => {
  render(<Match match={{
    home: 'Arsenal',
    away: 'Chelsea',
    score: [0, 0],
    updatedAt: TEST_DATE,
    finished: false
  }} />);
  expect(screen.getByTestId(matchItem)).toBeInTheDocument();
});

test('should update the score when update button clicked', () => {
  const matchSetter = jest.fn();

  jest.useFakeTimers();
  jest.setSystemTime(new Date(TEST_DATE));

  const initialMatch = {
    home: 'Arsenal',
    away: 'Chelsea',
    score: [1, 0],
    updatedAt: TEST_DATE,
    finished: false
  };

  const updatedMatch = {
    home: 'Arsenal',
    away: 'Chelsea',
    score: [2, 0],
    updatedAt: TEST_DATE,
    finished: false
  };

  const updatedMatch2 = {
    home: 'Arsenal',
    away: 'Chelsea',
    score: [2, 1],
    updatedAt: TEST_DATE,
    finished: false
  };

  render(
    <Match
      match={initialMatch}
      setMatch={matchSetter}
    />
  );
  const updateHomeTeamButtonElement = screen.getByTestId(updateHomeTeamButton)
    , updateAwayTeamButtonElement = screen.getByTestId(updateAwayTeamButton);

  userEvent.click(updateHomeTeamButtonElement);

  let [updater] = matchSetter.mock.lastCall
    , updated = updater([initialMatch]);
  expect(updated).toEqual([updatedMatch]);

  userEvent.click(updateAwayTeamButtonElement);

  [updater] = matchSetter.mock.lastCall;
  updated = updater([initialMatch]);
  expect(updated).toEqual([updatedMatch2]);
});

test('should finish match when finish button clicked', () => {
  const mockMatch = [{
    home: 'Arsenal',
    away: 'Chelsea',
    score: [1, 0],
    updatedAt: TEST_DATE,
    finished: false
  }];

  const matchSetter = jest.fn(() => (mockMatch));

  render(
    <Match
      match={mockMatch[0]}
      setMatch={matchSetter}
    />
  );

  const finishButtonElement = screen.getByTestId(finishButton);
  userEvent.click(finishButtonElement);
  
  const [updater] = matchSetter.mock.lastCall
      , updated = updater([mockMatch[0]]);

  expect(updated).toEqual([{
    ...mockMatch[0],
    finished: true
  }])
});

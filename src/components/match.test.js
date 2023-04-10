import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  matchComponent,
  updateHomeTeamButton,
  updateAwayTeamButton,
  finishButton
} from '../shared';
import { Match } from './match';

test('should render toolbar component correctly', () => {
  render(<Match />);
  expect(screen.getByTestId(matchComponent)).toBeInTheDocument();
});

test('should update the score when update button clicked', () => {
  const mockSetter = jest.fn();

  const initialMatch = {
    home: 'Arsenal',
    away: 'Chelsea',
    score: [1, 0],
    createdAt: 1681126298160,
    finished: false
  };

  const updatedMatch = {
    home: 'Arsenal',
    away: 'Chelsea',
    score: [2, 0],
    createdAt: 1681126298160,
    finished: false
  };

  const updatedMatch2 = {
    home: 'Arsenal',
    away: 'Chelsea',
    score: [2, 1],
    createdAt: 1681126298160,
    finished: false
  };

  render(
    <Match
      match={initialMatch}
      setMatch={mockSetter}
    />
  );
  const updateHomeTeamButtonElement = screen.getByTestId(updateHomeTeamButton)
      , updateAwayTeamButtonElement = screen.getByTestId(updateAwayTeamButton);

  userEvent.click(updateHomeTeamButtonElement);
  let [updater] = mockSetter.mock.lastCall;
  let updated = updater([initialMatch]);
  expect(updated).toEqual([updatedMatch]);

  userEvent.click(updateAwayTeamButtonElement);
  [updater] = mockSetter.mock.lastCall;
  updated = updater([initialMatch]);
  expect(updated).toEqual([updatedMatch2]);
});

test('should finish match when finish button clicked', () => {
  render(<Match match={{
    home: 'Arsenal',
    away: 'Chelsea',
    score: [1, 0],
    createdAt: 1681126298160,
    finished: false
  }} />);

  const finishButtonElement = screen.getByTestId(finishButton);
  userEvent.click(finishButtonElement);

  expect(matchComponent).toHaveTextContent('The match is over');
});

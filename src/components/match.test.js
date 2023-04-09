import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  matchComponent,
  updateHomeTeamButton,
  updateAwayTeamButton,
  finishButton,
  match
} from '../shared';
import { Match } from './match';

test('should render toolbar component correctly', () => {
  render(<Match />);
  expect(screen.getByTestId(matchComponent)).toBeInTheDocument();
});

test('should update the score when update button clicked', () => {
  render(<Match match={{
    home: 'Arsenal',
    away: 'Chelsea',
    score: [1, 0],
    finished: false
  }} />);

  const matchElement = screen.getByTestId(match);
  expect(matchElement).toHaveTextContent('Arsenal: 1');
  expect(matchElement).toHaveTextContent('Chelsea: 0');
  
  const updateHomeTeamButtonElement = screen.getByTestId(updateHomeTeamButton)
      , updateAwayTeamButtonElement = screen.getByTestId(updateAwayTeamButton);

  userEvent.click(updateHomeTeamButtonElement);
  userEvent.click(updateAwayTeamButtonElement);

  expect(matchElement).toHaveTextContent('Arsenal: 2');
  expect(matchElement).toHaveTextContent('Chelsea: 1');
});

test('should finish match when finish button clicked', () => {
   render(<Match match={{
    home: 'Arsenal',
    away: 'Chelsea',
    score: [1, 0],
    finished: false
  }} />);

  const finishButtonElement = screen.getByTestId(finishButton);
  userEvent.click(finishButtonElement);

  expect(matchComponent).toHaveTextContent('The match is over');
});

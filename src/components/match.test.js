import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  matchComponent,
  updateButton,
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
    id: 'f5cbf1ccb6f15',
    home: 'Arsenal',
    away: 'Chelsea',
    score: [1, 0],
    finished: false
  }} />);

  const matchElement = screen.getByTestId(match);
  expect(matchElement)
    .toHaveTextContent('Arsenal - 1 - Chelsea - 0');
  
  const updateButtonElement = screen.getByTestId(updateButton);
  userEvent.click(updateButtonElement);

  expect(matchElement).not
    .toHaveTextContent('Arsenal - 1 - Chelsea - 0');
});

test('should finish match when finish button clicked', () => {
   render(<Match match={{
    id: '6e10445083ec8',
    home: 'Arsenal',
    away: 'Chelsea',
    score: [1, 0],
    finished: false
  }} />);

  const finishButtonElement = screen.getByTestId(finishButton);
  userEvent.click(finishButtonElement);

  expect(matchComponent).toHaveTextContent('The match is over');
});

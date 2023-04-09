import { render, screen } from '@testing-library/react';
import {
  appRoot,
  teamsComponent,
  toolbarComponent,
  scoreBoardComponent
} from './shared';
import App from './App';

test('should render app correctly', () => {
  render(<App />);
  expect(screen.getByTestId(appRoot)).toBeInTheDocument();
});

test('should render Toolbar, Teams and ScoreBoard components correctly on initial state', () => {
  render(<App />);

  expect(screen.getByTestId(teamsComponent)).toBeInTheDocument();
  expect(screen.getByTestId(toolbarComponent)).toBeInTheDocument();
  expect(screen.getByTestId(scoreBoardComponent)).toBeInTheDocument();
});

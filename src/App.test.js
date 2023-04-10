import { render, screen } from '@testing-library/react';
import {
  appRoot,
  toolbarComponent,
  scoreBoardComponent
} from './shared';
import App from './App';

test('should render app correctly', () => {
  render(<App />);
  expect(screen.getByTestId(appRoot)).toBeInTheDocument();
});

test('should render Toolbar and ScoreBoard components correctly on initial state', () => {
  render(<App />);

  expect(screen.getByTestId(toolbarComponent)).toBeInTheDocument();
  expect(screen.getByTestId(scoreBoardComponent)).toBeInTheDocument();
});

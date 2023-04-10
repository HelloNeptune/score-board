import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    toolbarComponent,
    homeTeamInput,
    awayTeamInput,
    createButton
} from '../shared';

import { Toolbar } from './toolbar';

test('should render toolbar component correctly', () => {
    render(<Toolbar />);

    expect(screen.getByTestId(toolbarComponent)).toBeInTheDocument();
    expect(screen.getByTestId(homeTeamInput)).toBeInTheDocument();
    expect(screen.getByTestId(awayTeamInput)).toBeInTheDocument();
    expect(screen.getByTestId(createButton)).toBeInTheDocument();
});

test('should create new match when click the create button', () => {
    const matchSetter = jest.fn();
    render(<Toolbar setMatch={matchSetter} />);

    const createButtonElement = screen.getByTestId(createButton);
    userEvent.click(createButtonElement);

    expect(matchSetter).toHaveBeenCalledWith({
        home: 'Arsenal',
        away: 'Chelsea',
        score: [0, 0],
        createdAt: 1681126298160,
        finished: false
    })
});

test('should not create new match if all competitions are finished', () => {
    const matchSetter = jest.fn();
    render(<Toolbar setMatch={matchSetter} />);

    const createButtonElement = screen.getByTestId(createButton);
    userEvent.click(createButtonElement);

    expect(matchSetter).not.toHaveBeenCalled()
});

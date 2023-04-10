import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    toolbarComponent,
    homeTeamInput,
    awayTeamInput,
    createButton,
    TEST_DATE
} from '../shared';

import { Toolbar } from './toolbar';

beforeEach(() => {
    jest.useRealTimers();
})

test('should render toolbar component correctly', () => {
    render(<Toolbar />);

    expect(screen.getByTestId(toolbarComponent)).toBeInTheDocument();
    expect(screen.getByTestId(homeTeamInput)).toBeInTheDocument();
    expect(screen.getByTestId(awayTeamInput)).toBeInTheDocument();
    expect(screen.getByTestId(createButton)).toBeInTheDocument();
});

test('should create new match when click the create button', () => {
    const matchSetter = jest.fn();

    jest.useFakeTimers();
    jest.setSystemTime(new Date(TEST_DATE));

    render(<Toolbar setMatch={matchSetter} />);

    const createButtonElement = screen.getByTestId(createButton)
        , homeTeamInputElement = screen.getByTestId(homeTeamInput)
        , awayTeamInputElement = screen.getByTestId(awayTeamInput);

    userEvent.type(homeTeamInputElement, 'Arsenal');
    userEvent.type(awayTeamInputElement, 'Chelsea');
    userEvent.click(createButtonElement);

    const [updater] = matchSetter.mock.lastCall
        , updated = updater([]);

    expect(updated).toEqual([{
        home: 'Arsenal',
        away: 'Chelsea',
        score: [0, 0],
        updatedAt: TEST_DATE,
        finished: false
    }]);
});

test('should not create new match if all competitions are finished', () => {
    const matchSetter = jest.fn();
    
    render(
        <Toolbar
            setMatch={matchSetter}
            allFinish={true}
        />
    );

    const createButtonElement = screen.getByTestId(createButton);
    userEvent.click(createButtonElement);

    expect(matchSetter.mock.lastCall).toBe(undefined);
});

import { render, screen } from '@testing-library/react';
import {
    toolbarComponent,
    homeTeamInput,
    awayTeamInput,
    createButton
} from './shared';

import Toolbar from './toolbar';

test('should render toolbar component correctly', () => {
    render(<Toolbar />);

    expect(screen.getByTestId(toolbarComponent)).toBeInTheDocument();
    expect(screen.getByTestId(homeTeamInput)).toBeInTheDocument();
    expect(screen.getByTestId(awayTeamInput)).toBeInTheDocument();
    expect(screen.getByTestId(createButton)).toBeInTheDocument();
});

test('should create new match when click the create button', async () => {
    render(<Toolbar />);
});

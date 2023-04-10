import { Button } from 'primereact/button';
import { useCallback } from 'react';
import {
  updateAwayTeamButton,
  updateHomeTeamButton,
  matchItem
} from '../shared';

export const Match = ({ match, setMatch }) => {

  const updateScore = useCallback((side) => {
    setMatch(prevState => {
      const index = prevState.indexOf(match);

      // Deep copy needed here to trigger state
      // change
      const copy = [...prevState];

      copy[index].score[side] += 1;
      return copy;
    })
  }, [setMatch, match]);

  return (
    <div
      className='col-4 mb-3 shadow-1 border-round p-5 gap-2 flex flex-column'
      data-testid={matchItem}
    >
      <div className='flex align-items-center'>
        <Button
          className='increase-button'
          rounded
          size='small'
          icon="pi pi-plus"
          severity="secondary"
          onClick={() => updateScore(0)}
          data-testid={updateHomeTeamButton}
        />
        {match.home}: {match.score[0]}
      </div>
      <div className='flex align-items-center'>
        <Button
          className='increase-button'
          rounded
          size='small'
          icon="pi pi-plus"
          severity="secondary"
          onClick={() => updateScore(1)}
          data-testid={updateAwayTeamButton}
        />
        {match.away}: {match.score[1]}
      </div>
      <Button
        className='mt-3'
        size='small'
        outlined
      >
        Finish Competition
      </Button>
    </div>
  )
}
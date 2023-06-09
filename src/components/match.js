import { Button } from 'primereact/button';
import { useCallback } from 'react';
import {
  updateAwayTeamButton,
  updateHomeTeamButton,
  matchItem,
  finishButton
} from '../shared';

const clone = (items, item) => {
  const index = items.indexOf(item);

  // Deep copy needed here to trigger state
  // change
  const copy = [...items];
  return { index, copy };
};

export const Match = ({ match, setMatch }) => {

  const updateScore = useCallback((side) => {
    setMatch(prevState => {
      const { index, copy } = clone(prevState, match);

      copy[index].score[side] += 1;
      copy[index].updatedAt = new Date().getTime();
      return copy;
    })
  }, [setMatch, match]);

  const finishMatch = useCallback((side) => {
    setMatch(prevState => {
      const { index, copy } = clone(prevState, match);

      copy[index].finished = true;
      return copy;
    })
  }, [setMatch, match]);

  return (
    <div
      className='col-4 mb-3 shadow-1 border-round p-5 gap-2 flex flex-column'
      data-testid={matchItem}
    >
      <div className='flex align-items-center'>
        {!match.finished && (
          <Button
            className='increase-button'
            rounded
            size='small'
            icon="pi pi-plus"
            severity="secondary"
            onClick={() => updateScore(0)}
            data-testid={updateHomeTeamButton}
          />
        )}
        {match.home}: {match.score[0]}
      </div>
      <div className='flex align-items-center'>
        {!match.finished && (
          <Button
            className='increase-button'
            rounded
            size='small'
            icon="pi pi-plus"
            severity="secondary"
            onClick={() => updateScore(1)}
            data-testid={updateAwayTeamButton}
          />
        )}
        {match.away}: {match.score[1]}
      </div>
      {!match.finished && (
        <Button
          className='mt-3'
          size='small'
          outlined
          onClick={finishMatch}
          data-testid={finishButton}
        >
          Finish Competition
        </Button>
      )}
    </div>
  )
}
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { useCallback, useState } from 'react';
import { errorMessage, score, scoreBoardComponent, showSummaryButton } from '../shared';

export const ScoreBoard = ({ matches, setAllFinish }) => {
  const [error, setError] = useState(null);
  const [showSummary, setShowSummary] = useState(null);
  const [sortedMatches, setSortedMatches] = useState(matches);

  const showSummaryClick = useCallback(() => {
    const ongoingMatches = matches.find(match => !match.finished);

    // Check if any match has been played
    if (!matches.length) {
      setError('There is no competition in history!');
      return;
    }

    // Check if is there any ongoing match
    if (ongoingMatches) {
      setError('All matches should finish before getting the summary!');
      return;
    }

    // Javascript 'sort' method mutates the given array so because of that
    // we need to clone the original and sort out the cloned one
    const orderedMatches = [...matches].sort((
      { score: aScore, createdAt: aStartTime }, { score: bScore, createdAt: bStartTime }) => {
        const aSum = Math.abs(aScore[0] + aScore[1])
            , bSum = Math.abs(bScore[0] + bScore[1]);

        const diff = bSum - aSum;

        // For the same scores we'll check the start time 
        return diff === 0 ? aStartTime > bStartTime ? -1 : 1 : diff;
      }
    );
    
    setSortedMatches(orderedMatches);
    setError(null);
    setAllFinish(true);
    setShowSummary(true);
  }, [matches, setAllFinish])

  return (
    <div
      className='w-full lg:w-6 mx-auto mt-4'
      data-testid={scoreBoardComponent}
    >
      <div className="surface-card p-4 shadow-2 border-round ">
        <Button
          label="Show Summary"
          icon="pi pi-list"
          className="w-full"
          severity='success'
          onClick={showSummaryClick}
          data-testid={showSummaryButton}
        />
      </div>
      <div className='w-full lg:w-6 mx-auto mt-3'>
        {error && (
          <Message
            className='w-full'
            severity="warn"
            text={error}
            data-testid={errorMessage}
          />
        )}
      </div>
      <div className='w-full lg:w-6 mx-auto mt-3 text-center'>
        {showSummary && sortedMatches.map((match, index) => (
          <div
            key={index}
            className='mb-3 shadow-1 border-round p-2'
            data-testid={score}
          >
            {match.home}: {match.score[0]} - {match.away}: {match.score[1]}
          </div>
        ))}
      </div>
    </div>
  )
}



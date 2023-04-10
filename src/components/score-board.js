import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { useCallback, useState } from 'react';

export const ScoreBoard = ({ matches, setAllFinish }) => {
  const [error, setError] = useState(null);
  const [showSummary, setShowSummary] = useState(null);

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

    setError(null);
    setShowSummary(true);
    setAllFinish(true);
  }, [matches, setAllFinish])

  return (
    <div className='w-full lg:w-6 mx-auto mt-8'>
      <div className="surface-card p-4 shadow-2 border-round ">
        <Button
          label="Show Summary"
          icon="pi pi-list"
          className="w-full"
          severity='success'
          onClick={showSummaryClick}
        />
      </div>
      <div className='w-full lg:w-6 mx-auto mt-3'>
        {error && (
          <Message
            className='w-full'
            severity="warn"
            text={error}
          />
        )}
      </div>
      <div className='w-full lg:w-6 mx-auto mt-3 text-center'>
        {showSummary && (
          <>
            <div className='mb-3 shadow-1 border-round p-2'>Arsenal: 1 - Chelsea: 0</div>
            <div className='mb-3 shadow-1 border-round p-2'>Real Madrid: 3 - AC Milan: 1</div>
            <div className='mb-3 shadow-1 border-round p-2'>Liverpool: 1 - Inter Milan: 1</div>
            <div className='mb-3 shadow-1 border-round p-2'>Juventus: 5 - PSG: 8</div>
          </>
        )}
      </div>
    </div>
  )
}
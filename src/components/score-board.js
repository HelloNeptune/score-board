import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { useCallback, useState } from 'react';

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
    const orderedMatches = [...matches].sort(({ score: aScore }, { score: bScore }) =>
      (aScore[0] + aScore[1]) - (bScore[0] + bScore[1])
    ).reverse()
    
    setSortedMatches(orderedMatches);
    setError(null);
    setShowSummary(true);
    setAllFinish(true);
  }, [matches, setAllFinish])

  return (
    <div className='w-full lg:w-6 mx-auto mt-4'>
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
        {showSummary && sortedMatches.map((match, index) => (
          <div
            key={index}
            className='mb-3 shadow-1 border-round p-2'
          >
            {match.home}: {match.score[0]} - {match.away}: {match.score[1]}
          </div>
        ))}
      </div>
    </div>
  )
}
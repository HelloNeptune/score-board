import { Toolbar } from './components/toolbar';
import { ScoreBoard } from './components/score-board';
import { Match } from './components/match';
import { useEffect, useState } from 'react';

export const App = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    console.log(matches)
  }, [matches])
  return (
    <div className="App">
      <h2 className='text-center'>Score Board App</h2>
      <Toolbar setMatch={setMatches} />
      <div className='w-full lg:w-6 mx-auto mt-8 flex flex-wrap'>
        {matches.map((match, idx) => (
          <Match
            key={idx}
            match={match}
          />
        ))}
      </div>
      <ScoreBoard />
    </div>
  );
}

export default App;

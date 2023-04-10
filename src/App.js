import { Toolbar } from './components/toolbar';
import { ScoreBoard } from './components/score-board';
import { Match } from './components/match';
import { useEffect, useState } from 'react';

export const App = () => {
  const [matches, setMatches] = useState([]);
  const [allFinish, setAllFinish] = useState(false);

  return (
    <div className="App">
      <h2 className='text-center'>Score Board App</h2>

      {/* Toolbar Component */}
      <Toolbar
        setMatch={setMatches}
        allFinish={allFinish}
      />

      {/* Active Matches */}
      <div className='w-full lg:w-6 mx-auto mt-8 flex flex-wrap'>
        {matches.map((match, idx) => (
          <Match
            key={idx}
            match={match}
            setMatch={setMatches}
          />
        ))}
      </div>

      {/* Scoreboard Component */}
      <ScoreBoard
        matches={matches}
        setAllFinish={setAllFinish}
      />
    </div>
  );
}

export default App;

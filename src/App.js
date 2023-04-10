import { Toolbar } from './components/toolbar';
import { ScoreBoard } from './components/score-board';
import { Match } from './components/match';
import { useState } from 'react';

const mockData = [
  {
    home: 'Mexico',
    away: 'Canada',
    score: [0, 5],
    createdAt: 1681126293806,
    finished: false
  },
  {
    home: 'Spain',
    away: 'Brazil',
    score: [10, 2],
    createdAt: 1681126298160,
    finished: false
  },
  {
    home: 'Germany',
    away: 'France',
    score: [2, 2],
    createdAt: 1681126302623,
    finished: false
  },
  {
    home: 'Uruguay',
    away: 'Italy',
    score: [6, 6],
    createdAt: 1681126307203,
    finished: false
  },
  {
    home: 'Argentina',
    away: 'Australia',
    score: [3, 1],
    createdAt: 1681126318829,
    finished: false
  }
];

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
      <div className='w-full lg:w-6 mx-auto mt-4 flex flex-wrap'>
        {matches.map((match, index) => (
          <Match
            key={index}
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

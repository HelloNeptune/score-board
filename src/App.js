import { Toolbar } from './components/toolbar';
import { ScoreBoard } from './components/score-board';
import { Match } from './components/match';

function App() {
  return (
    <div className="App">
      <h2 className='text-center'>Score Board App</h2>
      <Toolbar />
      <Match />
      <ScoreBoard />
    </div>
  );
}

export default App;

import { Toolbar } from './components/toolbar';
import { ScoreBoard } from './components/score-board';
import { Match } from './components/match';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Match />
      <ScoreBoard />
    </div>
  );
}

export default App;

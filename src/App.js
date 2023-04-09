import { Toolbar } from './components/toolbar';
import { ScoreBoard } from './components/score-board';
import { Teams } from './components/match';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Teams />
      <ScoreBoard />
    </div>
  );
}

export default App;

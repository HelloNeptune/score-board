import { Toolbar } from './components/toolbar';
import { ScoreBoard } from './components/score-board';
import { Match } from './components/match';

function App() {
  return (
    <div className="App">
      <h2 className='text-center'>Score Board App</h2>
      <Toolbar />
      <div className='w-full lg:w-6 mx-auto mt-8 flex flex-wrap'>
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
      </div>
      <ScoreBoard />
    </div>
  );
}

export default App;

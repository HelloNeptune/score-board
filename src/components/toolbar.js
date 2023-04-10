import { useState, useCallback } from "react";
import { toolbarComponent } from "../shared"
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export const Toolbar = ({ setMatch, allFinish }) => {
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');

  const addCompetition = useCallback(() => {
    if (!homeTeam || !awayTeam) return;

    setMatch(prevState => {
      return [
        ...prevState,
        {
          home: homeTeam,
          away: awayTeam,
          score: [0, 0],
          finished: false
        }
      ]
    })

    setHomeTeam('');
    setAwayTeam('');
  }, [homeTeam, awayTeam, setMatch]);

  return (
    <>
      <div
        className="toolbar"
        data-testid={toolbarComponent}
      >
        <div className="flex align-items-center justify-content-center">
          <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div className="flex">
              <div className="col">
                <label
                  htmlFor="home-team"
                  className="block text-900 font-medium mb-2"
                >
                  Home Team
                </label>
                <InputText
                  id="home-team"
                  type="text"
                  value={homeTeam}
                  onChange={(e) => setHomeTeam(e.target.value)}
                  placeholder="Type home team name"
                  className="w-full mb-3"
                  disabled={allFinish}
                />
              </div>
              <div className="col">
                <label
                  htmlFor="away-team"
                  className="block text-900 font-medium mb-2"
                >
                  Away Team
                </label>
                <InputText
                  id="away-team"
                  type="text"
                  value={awayTeam}
                  onChange={(e) => setAwayTeam(e.target.value)}
                  placeholder="Type away team name"
                  className="w-full mb-3"
                  disabled={allFinish}
                />
              </div>
            </div>
            <Button
              className="w-full"
              label="Start Competition"
              icon="pi pi-plus"
              onClick={addCompetition}
              disabled={allFinish}
            />
          </div>
        </div>
      </div>
    </>
  )
}
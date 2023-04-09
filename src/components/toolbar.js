import { toolbarComponent } from "../shared"
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export const Toolbar = ({ setMatch }) => {
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
                  placeholder="Type home team name"
                  className="w-full mb-3"
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
                  placeholder="Type away team name"
                  className="w-full mb-3"
                />
              </div>
            </div>
            <Button label="Start Competition" icon="pi pi-plus" className="w-full" />
          </div>
        </div>
      </div>
    </>
  )
}
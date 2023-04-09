import { Button } from 'primereact/button';
import { Message } from 'primereact/message';

export const ScoreBoard = () => {
  return (
    <>
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 mx-auto mt-8">
        <Button
          label="Show Summary"
          icon="pi pi-list"
          className="w-full"
          severity='success'
        />
      </div>
      <div className='w-full lg:w-6 mx-auto mt-3'>
        <Message
          className='w-full'
          severity="warn"
          text="Warning Message"
        />
      </div>
      <div className='w-full lg:w-6 mx-auto mt-3 text-center'>
        <div className='mb-3 shadow-1 border-round p-2'>Arsenal: 1 - Chelsea: 0</div>
        <div className='mb-3 shadow-1 border-round p-2'>Real Madrid: 3 - AC Milan: 1</div>
        <div className='mb-3 shadow-1 border-round p-2'>Liverpool: 1 - Inter Milan: 1</div>
        <div className='mb-3 shadow-1 border-round p-2'>Juventus: 5 - PSG: 8</div>
      </div>
    </>
  )
}
import { Button } from 'primereact/button';

export const Match = () => {
  return (
    <div className='col-4 mb-3 shadow-1 border-round p-5 gap-2 flex flex-column'>
      <div className='flex align-items-center'>
        <Button
          className='increase-button'
          rounded
          size='small'
          icon="pi pi-plus"
          severity="secondary"
        />
        Arsenal: 1
      </div>
      <div className='flex align-items-center'>
        <Button
          className='increase-button'
          rounded
          size='small'
          icon="pi pi-plus"
          severity="secondary"
        />
        Chelsea: 0
      </div>
      <Button
        className='mt-3'
        size='small'
        outlined
      >
        Finish Competition
      </Button>
    </div>
  )
}
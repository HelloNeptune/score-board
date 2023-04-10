import { Button } from 'primereact/button';

export const Match = ({ match }) => {
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
        {match.home}: {match.score[0]}
      </div>
      <div className='flex align-items-center'>
        <Button
          className='increase-button'
          rounded
          size='small'
          icon="pi pi-plus"
          severity="secondary"
        />
        {match.away}: {match.score[1]}
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
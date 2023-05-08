import React, {FC} from 'react'
import Sneakers from '../models/sneakers'
import SinglePizza from './SinglePizza'

interface DisplaySneakersProps {
    sneakersList: Sneakers[]
    updateNewSneakers: (newSneakers: Sneakers) => void
    deleteSneakers: (id: number) => void
} 

const DisplaySneakers: FC<DisplaySneakersProps> = ({ sneakersList, deleteSneakers, updateNewSneakers }) => {
  return (
    <div>
        {
            sneakersList.map(sneaker => (
                <SinglePizza 
                key={sneaker.id}
                sneaker={sneaker}
                updateNewSneakers={updateNewSneakers}
                deleteSneakers={deleteSneakers}
                />
            ))
        }
    </div>
  )
}

export default DisplaySneakers
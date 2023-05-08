import React, { FC, useState } from 'react';
import Sneakers from './models/sneakers';
import sneakersData from './sneakers';
import AddSneakers from './components/AddSneakers';
import DisplaySneakers from './components/DisplaySneakers';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'


const App: FC = () => {

  const [sneakersList, setSneakersList] = useState<Sneakers[]>([])
  const [showAddClose, setShowAddClose] = useState<boolean>(false)

  const toggleCloseAdd = () => {
    setShowAddClose(!showAddClose)
  }

  

  const handleAddSneakers = (newSneakers: Sneakers) => {
    setSneakersList([
      ...sneakersList,
      newSneakers
    ])
  }
  
  const updateNewSneakers = (newSneaker: Sneakers) => {
    setSneakersList(
      sneakersList.map(sneaker => (sneaker.id === newSneaker.id ? newSneaker : sneaker ))
    )
  }
  
  const deleteSneakers = (id: number) => {
    const delSneakers = sneakersList.filter(sneaker => sneaker.id !== id)
    setSneakersList(delSneakers)
  }

  return (
    <div className="container mx-auto mt-20">
      <div className='addSneakers'>
        <AddSneakers
          handleAddSneakers={handleAddSneakers}
          toggleCloseAdd={toggleCloseAdd}
        />
      </div>
      <div className='flex justify-between flex-wrap'>
        <DisplaySneakers 
        sneakersList={sneakersList}
        updateNewSneakers={updateNewSneakers}
        deleteSneakers={deleteSneakers}
        />
        
      </div>
    </div>
  );
}

export default App;

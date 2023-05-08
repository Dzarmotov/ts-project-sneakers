import React, { FC, useState } from 'react'
import Sneakers from '../models/sneakers'
import EditSneakersForm from './EditSneakersForm'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'

interface SinglePizzaProps {
    sneaker: Sneakers
    updateNewSneakers: (newSneakers: Sneakers) => void
    deleteSneakers: (id: number) => void
}

const SinglePizza: FC<SinglePizzaProps> = ({ sneaker, deleteSneakers, updateNewSneakers }) => {

  const [edit, setEdit] = useState<boolean>(false)

  const toggleEditFormSneakers = () => {
    setEdit(!edit)
  }

  const toggleDeleteSneakers = () => {
    deleteSneakers(sneaker.id)
  }

  return (
    <div>
        <div className='border mb-2 w-96 py-5 px-10 rounded-lg'>
            <img src={`/img/${sneaker.img}`} alt={sneaker.title} />
            <h2 className='text-center text-xl font-semibold'>{sneaker.title}</h2>
            <p className='text-center'>{sneaker.desc}</p>
            <span className='font-bold block'>{sneaker.price} ₽</span>
            <button className='font-bold'>Добавить корзину</button>
            <div className='flex'>
            <AiFillEdit onClick={toggleEditFormSneakers} />
            <AiFillDelete onClick={toggleDeleteSneakers}/>
            </div>
        </div>
        <div className="controls">
        </div>
        {
          edit && <EditSneakersForm
          updateNewSneakers={updateNewSneakers}
          toggleEditFormSneakers={toggleEditFormSneakers}
          data={sneaker}
          />
        }
    </div>
  )
}

export default SinglePizza
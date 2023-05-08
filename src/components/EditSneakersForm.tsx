import React, {FC, useState, ChangeEvent, FormEvent} from 'react'
import Sneakers from '../models/sneakers'

interface EditSneakersFormProps {
    data: Sneakers
    updateNewSneakers: (newSneaker: Sneakers) => void
    toggleEditFormSneakers: () => void
}

const EditSneakersForm: FC<EditSneakersFormProps> = ({data, updateNewSneakers, toggleEditFormSneakers}) => {
    
    const [editSneakers, setEditSneakers] = useState<Sneakers>(data)

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setEditSneakers({
            ...editSneakers,
            [name]: value
        })

    }
 
    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { title, desc, price, img } = editSneakers

        if(title && desc && price && img) {
            updateNewSneakers(editSneakers)
            toggleEditFormSneakers()
        }
    }

    return (
    <div>
        <form onSubmit={handleOnSubmit}>
        <input 
            type="text"
            name='title'
            placeholder='Название кроссовки'
            onChange={handleOnChange}
            value={editSneakers.title}
            />
            <input 
            type="text"
            name='desc'
            placeholder='Описание кроссовки'
            onChange={handleOnChange}
            value={editSneakers.desc}
            />
            
            <input 
            type="text"
            name='price'
            placeholder='Стоимость'
            onChange={handleOnChange}
            value={editSneakers.price}
            />
            <input 
            type="text"
            name='img'
            placeholder='Изображение'
            onChange={handleOnChange}
            value={editSneakers.img}
            />
            <button type='submit'>Сохранить изменения</button>
        </form>
    </div>
  )
}

export default EditSneakersForm
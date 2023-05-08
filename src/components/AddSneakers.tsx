import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import Sneakers from '../models/sneakers'

interface AddSneakersProps {
    handleAddSneakers: (newSneakers: Sneakers) => void
    toggleCloseAdd: () => void
}

const initState = {
    title: '',
    desc: '',
    price: '',
    img: ''
}

const AddSneakers: FC<AddSneakersProps> = ({ handleAddSneakers, toggleCloseAdd }) => {
    const [newSneakers, setNewSneakers] = useState<{
        title: string, desc: string, price: string, img: string
    }>(initState)

    const [showAddForm, setShowFormAdd] = useState<boolean>(false)

    const toggleShowAddForm = () => {
        setShowFormAdd(!showAddForm)
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setNewSneakers({
            ...newSneakers,
            [name]: value
        })

    }

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { title, desc, price, img } = newSneakers

        if(title && desc && price && img) {
            handleAddSneakers({
                title,
                desc,
                img,
                price: Number(price),
                id: Date.now()
            })
        }
        setNewSneakers(initState)
        toggleCloseAdd()
        
        
    }


    return (
        <div className=' mb-20 text-center font-bold hover:text-red'>
            <button onClick={toggleShowAddForm}>Добавить товар</button>

            {
                showAddForm && <>
                    <form onSubmit={handleOnSubmit} className='border w-96 mx-auto py-3 px-3 rounded-lg'>
                        <input
                        className='mb-3'
                            type="text"
                            name='title'
                            placeholder='Название товара'
                            value={newSneakers.title}
                            onChange={handleOnChange} />
                        <input
                        className='mb-3'
                            type="text"
                            name='desc'
                            placeholder='Описание товара'
                            value={newSneakers.desc}
                            onChange={handleOnChange} />
                        <input
                        className='mb-3'
                            type="text"
                            name='price'
                            placeholder='Стоимость товара'
                            value={newSneakers.price}
                            onChange={handleOnChange} />
                        <input
                        className='mb-3'
                            type="text"
                            name='img'
                            placeholder='Изображение'
                            value={newSneakers.img}
                            onChange={handleOnChange} />
                         <button type='submit'>Опубликовать товар</button>
                    </form>
                </>
            }
        </div>
    )
}

export default AddSneakers
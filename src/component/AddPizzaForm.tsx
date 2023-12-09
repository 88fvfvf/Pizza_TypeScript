import React, { FC, useState } from 'react';
import Pizza from '../models/Pizza';
import './style.css'

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void
}

const initState = {
    title: '',
    price: '',
    img: '',
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {

    const [newPizza, setNewPizza] = useState<{ title: string, price: string, img: string }>(initState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handle change >>', e.target); 
        const { name,value } = e.target
        console.log(name,value);

        setNewPizza({
            ...newPizza,
            [name]:value
        })
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { title,price,img } = newPizza

        if(title && price && img) {
            addPizza({
                title,
                img,
                price: Number(price),
                id: Date.now()
            })
            setNewPizza(initState)
        }
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='Название' onChange={handleChange} value={newPizza.title} />
            <input type="text" name='price' placeholder='Стоимость' onChange={handleChange} value={newPizza.price} />
            <input type="text" list='recomended' name='img' placeholder='Изображение' onChange={handleChange} value={newPizza.img} />
            <datalist id='recomended'>
                <option value="pizza-1.jpg"/>
                <option value="pizza-2.jpg"/>
                <option value="pizza-3.jpg"/>
                <option value="pizza-4.jpg"/>
                <option value="pizza-5.jpg"/>
                <option value="pizza-6.jpg"/>
            </datalist>
            <button type="submit"> + Добавть в Меню </button>
        </form>
    )
}

export default AddPizzaForm
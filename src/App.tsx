import { type } from '@testing-library/user-event/dist/type';
import React, { FC, useState } from 'react';
import './App.css';
import AddPizzaForm from './component/AddPizzaForm';
import DisplayPizzas from './component/DisplayPizzas';
import Pizza from './models/Pizza';

// let pizza: string = 'salami'

// let price: number = 1200 

// let atStack: boolean = true

// let pizzas: string[] = ['Salami','Soussage']

// let numbers: number[] = [1,2,3]

// type Order = {
//   title:string
//   quanity?:number
//   // price?:1200 здесь можно поставить знак вопроса и сделать необезательным свойством
// } 

// const order: Order = {title:'Margaritta',quanity:10}

// const orders: Order[] = [
//   {title:'Margaritta'},
//   {title:'Salami',quanity:10}
// ]


// let num: null | number = null

// num = 10

// type PrintTitle = (title:string) => string

// const printTitle: PrintTitle = (title) => {
//   return title

// }

// printTitle("Hello World")

// const test: unknown = 'test'


// type X = {
//   a: string,
//   b:number
// }

// type Y = X & {
//   c:string,
//   d:number
// }

// let y: Y = {
//   c:'humo',
//   d:17,
//   a:"toshmatov",
//   b:10
// }

// interface Auto {
//   country: string
// }
// interface BMW extends Auto{
//   model: string,
//   year: number
// }

// const bmw:BMW = {
//   model: "m5 f90 CS",
//   year: 2022,
//   country: "germany"
// }



const App: FC = () => {

  const [pizzasList, setPizzasList] = useState<Pizza[]>([])

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza])
  }
  console.log("PizzasList >>>" ,pizzasList);

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">
          Наша пицерия
        </span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas pizzasList={pizzasList}/>
      </div>
    </div>
  );
}

export default App;

 import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';
import Root from './Components/Root';

function App() {
 const loadedCoffees = useLoaderData();
 const [coffees, setCoffees] = useState(loadedCoffees)


  return (
    <>
    <Root></Root>
    <Link to={'/addCoffee'}><button className='btn'>Add Coffee</button></Link>
      <h1 className='text-5xl text-purple-700'>Vite + React</h1>
      <h3 className='text-center text-5xl'> data: {coffees.length}</h3>
      <div className='grid grid-cols-2 px-20 gap-5'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>

     
    </>
  )
}

export default App

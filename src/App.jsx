 import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard';

function App() {
 const coffees = useLoaderData();

  return (
    <>
    <Link to={'/addCoffee'}><button className='btn'>Add Coffee</button></Link>
    <Link to={'/updateCoffee'}><button className='btn'>Update Coffee</button></Link>
      <h1 className='text-5xl text-purple-700'>Vite + React</h1>
      <h3 className='text-center text-5xl'> data: {coffees.length}</h3>
      <div className='grid grid-cols-2 px-20 gap-5'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>

     
    </>
  )
}

export default App

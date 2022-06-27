import {  useEffect, useState } from 'react';
import './App.css';
import Context from './Components/Context/Context';
import Home from './Components/Home/Home';
import { Routes, Route} from 'react-router-dom'
import Page from './Components/Page/Page'


function App() {
  const [countri, setCountri] = useState([])
  const [countriName, setCountriName] = useState()
  // const [keying, setKeying] = useState()

  
  useEffect(() => {
    const children1 = async () => {
      let fetching = await fetch('https://restcountries.com/v2/all')
      let data = await fetching.json()
      setCountri(data)
    }
    children1()

  }, [])

  const [first, setFirst] = useState(1)
  const [last] = useState(10)

  const firstIndex = first * last
  const lastIndex = firstIndex - last

  const slicing = countri.slice(lastIndex, firstIndex)

  const obj = {
    setFirst, slicing, countri, last,   first, countriName, setCountriName
  }

  console.log(slicing);
  return (
    <>
    <Context.Provider  value={obj}>

   

    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/name/:name' element={ <Page /> }/>
    </Routes>
  
    
      
    

    </Context.Provider>
  
    </>
  );
}

export default App;

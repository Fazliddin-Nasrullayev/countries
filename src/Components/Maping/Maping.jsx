import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';

const Maping = () => {


    const callback = useContext(Context)
    const { slicing, first,  setCountriName } = callback
    return (
        <>
        <ul className="list-group" >

          {slicing.map((item, index) => (
            <li className='list-group-item' key={ first === 1 ? index  : index + 1 + (first * 10) - 10 -1}  >
                <Link to={`/name/${item.name}`}>

                  
                    <h6 className='text-secondary'>                     
                     <span className='text-dark'>  {
                    first === 1 ? index + 1 : index + 1 + (first * 10) - 10
                    } </span>
                    {item.name}</h6>
                {setCountriName(item.alpha3Code)}
                </Link>
            </li>
            
          ))}  
        </ul>
        </>
    );
};

export default Maping;
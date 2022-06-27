import React, { useContext } from 'react';
import Context from '../Context/Context';

const Pagination = () => {
    const callback = useContext(Context)
    const {  setFirst,  countri, last} = callback

    const arr = []
    for (let i = 1; i <= Math.ceil(countri.length / last); i++) {
        arr.push(i)
    }



    return (
        <>
          {
            arr.map((num,index) => (
                <button key={index}
                onClick={() => setFirst(num)}
                className='btn btn-primary'>{num}</button>
            ))
          }  
        </>
    );
};

export default Pagination;
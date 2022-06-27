import React, { useEffect, useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import './Page.css'
const Page = () => {



    const {name} = useParams()
    const [post, setPost] = useState(null)

    console.log(name);
    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${name}`)
        .then((res) =>  res.json()
        .then(data => setPost(data))
        )
    },[name])


    const navigate = useNavigate()

    return (
        <div>
        {post && (
            <>
                <div className="card w-50 mx-auto mt-3">
                  <img src={`${post[0].flag}`} className="" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title text-center">{post[0].name}</h5>
                    <div className="div d-flex justify-content-around">
                        <div>
                        <h5>Population: {post[0].population}</h5>
                        <h5>Area: {post[0].area}</h5>
                        <h5>Reagion: {post[0].region}</h5>
                        <h5>Native Name: {post[0].nativeName}</h5>
                        </div>
                         <div>
                        <h5>Alpha Code: {post[0].alpha2Code}</h5>
                        <h5>Calling Code: {post[0].callingCodes}</h5>
                        <h5>Capital: {post[0].capital}</h5>
                        <h5>Currencies: {post[0].currencies[0].name}</h5>
                        </div>
                    </div>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
                <button className='btn btn-outline-danger' onClick={() => navigate('/')}>Countries</button>
            </>
        )

        }
        </div>
    );
};

export default Page;
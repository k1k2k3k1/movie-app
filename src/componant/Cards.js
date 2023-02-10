import React, { useEffect, useState } from 'react'
import { Audio, ThreeDots } from "react-loader-spinner";
import { getDocs } from 'firebase/firestore'
import { moviesRef } from './fairebase/Firebase';
import { Link } from "react-router-dom";
import ReactStars from 'react-stars';
const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef);
      console.log(data);
      _data.forEach((doc) => {
        setData((prv) => [...prv, { ...(doc.data()), id: doc.id }])
      })
      setLoading(false);
    }
    getData();
  }, [])

  return (

   <div class="flex flex-wrap justify-between p-3 mt-2">
      {loading ? <div className="w-full flex justify-center items-center h-96"><ThreeDots
        height={40} color="white" /></div> :
  
        data.map((e, i) => {
          console.log(e);
          return (
            <Link to={`./detail/${e.id}`} >  <div key={i} class="card shadow-lg p-2 hover:translate-y-4
      cursor-pointer">
              <img class="h-72" 
                src= {e.img}></img>
              <h1 class="text-white">{e.name}</h1>
              <h1 class="text-white">{e.Rating}
                <ReactStars
                  size={20}
                  half={true}
                  value={e.rating/e.rated}
                  edit={false}
                />
                  </h1>
              <h1 class="text-white">{e.year}</h1>
             
            </div></Link>

  )
}) }
      
      
    </div >
  )
}


export default Cards;

import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './Row.css'

function Row({title,fetchUrl,isPoster}) {
    // console.log(fetchUrl);

    const [movies,setMovies] = useState()
    const base_url = `https://image.tmdb.org/t/p/original/`;

    const fetchData=async()=>{
        const {data} = await tmdbAxiosInstance.get(fetchUrl)
        // console.log(data.results);
        setMovies(data.results)
    }

    // console.log(movies);

    useEffect(()=>{
        fetchData()
    },[])
    
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className="movie-row">
        {
            movies?.map (item=>(
                <img className={`${isPoster && 'movie-poster'} movie-img`} src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path}`} alt="img" />
            ))
        }
        </div>
    </div>
  )
}

export default Row
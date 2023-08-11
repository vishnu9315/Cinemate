
import React, { useState, useEffect} from 'react'

export const useFetch = (apiPath, queryTerm = "") => {

    const [data, setData] = useState([])

    // We are getting this apiPath from the routes
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
    
    useEffect(() => {
        async function fetchMovies() {
          const response = await fetch(url);
          const result = await response.json();
          setData(result.results)
              
        }
    
        fetchMovies();
      }, [url])

  return {data};
}




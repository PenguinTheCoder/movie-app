import React, {useEffect, useState} from "react";

import Movie from "./components/movie.js";


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=2b798e23b9e0f76e2f934495e4648511&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=2b798e23b9e0f76e2f934495e4648511&query=Jack+Reacher";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(' ');
  console.log(movies, 'filomovi');

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      console.log(data, 'pajicmilos');
      setMovies(data.results);
 });
  }
 
const handleOnSubmit = (e) => {
  e.preventDefault();

  if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      searchTerm('');
    }
};

const handleOnChange = (e) => {
  setSearchTerm(e.target.value)
}

  return (
    <div>
    <header> 
      <form onSubmit={handleOnSubmit}>
    <input className='search'
           type='search' 
           placeholder='Search...'
           value={searchTerm}
           onChange={handleOnChange}></input>
      </form> 
       </header>      
      <div className='movie-container'> 
            bok
            {
              movies.length > 0 && movies.map(movie => {
                
                  return (
                      <Movie key={movie.id} props={movie} />  
                  )
              })
            }
    </div>
    </div>
  );
} 


export default App;

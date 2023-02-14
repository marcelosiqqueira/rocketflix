import { useState } from 'react'
import './styles.css'
import axios from 'axios';

import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api'

type Movie = {
  title: string,
  overview: string,
  poster_path: string;
}



export default function Home() {
  const [movie, setMovie] = useState<Movie>({} as Movie);

  async function showMovie()
  {
    let randomNumber = Math.floor(Math.random() * 499) + 1;
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=71cef96c7f196833a4a1778c9f28008f&language=pt-BR&page=${randomNumber}`);
    const data = await response.json();
    const id = data
    
    const movie:Movie = {
      title: data.results[0].title,
      overview: data.results[0].overview,
      poster_path: IMG_URL + data.results[0].poster_path,
    } 
    setMovie(movie);
  }

  return (
    <div className='container'>
        <img className='centerIcon' src="../src/assets/favico/icon.png" alt="" />
        <span className='headerText'>Não sabe o que assistir?</span>

        <div className='contentApi'>
          <img id="posterImg" src={movie.poster_path} alt="" />
          <div className='movieAbout'>
            <span id='movieTitle'>{movie.title}</span>
            <span id='textAbout'>{movie.overview}</span>
          </div>

        </div>
        <div>     
          <button id='buttonFindMovie' onClick={showMovie}>
            <img className='smallIcon' src="../src/assets/favico/icon.png" alt="" />
            <span className='spanFindMovie'>Encontrar filme</span>
          </button>    
        </div>
        <span className='textBottom'>
          Clique em "Encontrar filme" que traremos informações 
          <br/>
          de algum filme para você assistir hoje.
        </span>
    </div>
  )
}
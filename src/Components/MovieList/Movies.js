// import DropDown from '../DropDown/DropDown';
import MovieContext from '../Context/MovieContext';
import { useContext, useState } from 'react';
import Movie from '../Movie/Movie';
import './Movies.css';
import "bootstrap";


const Movies = () => {
  const [all, setAll] = useState(true);
  const { movies, doneMovieList, deleteAll } = useContext(MovieContext);
  const handlechange = (e) => {
    if (e.target.dataset.catagory === 'all') {
      setAll(true);
    } else if (e.target.dataset.catagory === 'done') {
      setAll(false);
    }
  };

  return (

    <div className='movies'>
      <h2 className='all-movies-title'>All Movies</h2>
      <div className='movie-sort'>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <button onClick={deleteAll} className='clear-all' >Clear All</button>
      </div>
      <div className='movie-container'>
        {movies.length !== 0 ? (
          all === true ? (
            movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                isDone={movie.isDone}
                topic={movie.topic}
                date={movie.date}
                content={movie.content}
                cover={movie.cover}
              />
            ))
          ) : (
            doneMovieList.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                isDone={movie.isDone}
                topic={movie.topic}
                date={movie.date}
                content={movie.content}
              />
            ))
          )
        ) : (
          <h4 className='nothing'>Movie List is empty</h4>
        )}
      </div>
    </div>
  );
};
export default Movies;
import { v4 as uuid4 } from 'uuid';
import { createContext, useState, useEffect } from 'react';

const MovieContext = createContext();
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(
    !localStorage.getItem('movies')
      ? localStorage.setItem('movies', JSON.stringify([]))
      : 
      []
  );
  const [faveMovieList, setFaveMovie] = useState([]);
  const [PopUp, setPopUp] = useState({ in: false, item: null });
  const addMovies = (topic, content,date, cover) => {
    const oldMovie = JSON.parse(localStorage.getItem('movies'));
    const newMovie = {
      id: uuid4(),
      isFave: false,
      topic,
      date,
      content,
      cover,
    };
    localStorage.setItem('movies', JSON.stringify([newMovie, ...oldMovie]));
    setMovies([newMovie, ...movies]);
  };
  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('movies')));
  },
  []);
  useEffect(() => {
    const allfaveMovie = movies.filter((movie) => movie.isFave === true);
    setFaveMovie(allfaveMovie);
  }, [movies]);
  const deleteMovie = (id) => {
    const newMovie = movies.filter((movie) => movie.id !== id);
    setMovies(newMovie);
    localStorage.setItem('movies', JSON.stringify(newMovie));
  };
  const deleteAll = ()=>{
    setMovies([]);
  }
  const faveMovie = (id) => {
    const newMovie = [...movies];
    const index = newMovie.findIndex((movie) => movie.id === id);
    newMovie[index].isFave = !newMovie[index].isFave;
    setMovies(newMovie);
    localStorage.setItem('movies', JSON.stringify(newMovie));
  };
  const setId = (id) => {
    const index = movies.findIndex((movie) => movie.id === id);
    setPopUp({ in: !PopUp.in, item: movies[index] });
  };
  const editMovie = (text) => {
    const newMovie = [...movies];
    const index = newMovie.findIndex((movie) => movie.id === PopUp.item.id);
    newMovie[index].topic = text.topic;
    newMovie[index].date = text.date;
    newMovie[index].content = text.content;
    newMovie[index].cover = text.cover;
    setMovies(newMovie);
    localStorage.setItem('movies', JSON.stringify(newMovie));
  };
  return (
    <MovieContext.Provider
      value={{
        movies,
        addMovies,
        deleteMovie,
        faveMovie,
        PopUp,
        setPopUp,
        setId,
        deleteAll,
        editMovie,
        faveMovieList,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContext;
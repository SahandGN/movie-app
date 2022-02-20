// import { motion } from 'framer-motion';
import { useContext } from 'react';
import MovieContext from '../Context/MovieContext';
import './Movie.css';



const Movie = ({ isDone, topic, content, date, cover, id }) => {
  const { deleteMovie, doneMovie, setId } = useContext(MovieContext);
  return (
    <div
      className='movie'
      initial={{ x: '-100%', margin: 0 }}
      animate={{ x: 0, marginTop: 25 }}
      exit={{
        x: '-100%',
        height: 0,
        marginTop: 0,
        padding: 0,
        opacity: 0,
        width: 0,
        transition: {
          duration: 0.3,
        },
      }}
    >
      <span className={`movie-line`}></span>
      <div className='movie-status'>
        <button
          whileTap={{ scale: 2 }}
          onClick={() => deleteMovie(id)}
          className='ball movie-close'
        ></button>
        <button
          whileTap={{ scale: 2 }}
          onClick={() => setId(id)}
          className='ball movie-edit'
        ></button>
        <button
          whileTap={{ scale: 2 }}
          onClick={() => doneMovie(id)}
          className='ball movie-done'
        ></button>
      </div>
      <div className='movie-info'>
        <img
          className='movie-info'
          src={cover}
          alt={topic + " Cover"}>
        </img>
        <h4 className='movie-info movie-title'>
          {topic}
        </h4>
        <p>
          <h4 className='movie-info movie-title'>
            {date}
          </h4>
        </p>
        <p className='movie-info movie-content'>
          {isDone === true ? <del>{content}</del> : content}
        </p>
      </div>
    </div>
  );
};
export default Movie;
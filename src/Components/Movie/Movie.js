// import { motion } from 'framer-motion';
import { useContext } from 'react';
import MovieContext from '../Context/MovieContext';
import './Movie.css';



const Movie = ({ isDone, topic, content, date, cover, id }) => {
  const { deleteMovie, doneMovie, setId } = useContext(MovieContext);
  return (
    <div
      className='task'
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
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 10,
      }}
    >
      <span className={`task-line done-${isDone}`}></span>
      <div className='task__status'>
        <button
          whileTap={{ scale: 2 }}
          onClick={() => deleteMovie(id)}
          className='ball task__close'
        ></button>
        <button
          whileTap={{ scale: 2 }}
          onClick={() => setId(id)}
          className='ball task__edit'
        ></button>
        <button
          whileTap={{ scale: 2 }}
          onClick={() => doneMovie(id)}
          className='ball task__done'
        ></button>
      </div>
      <img src={cover} alt={topic + " Cover"}></img>
      <h4 className='task__title'>
        {isDone === true ? <del>{topic}</del> : topic}
      </h4>
      <h4 className='task__title'>
        {isDone === true ? <del>{date}</del> : date}
      </h4>
      <p className='task__content'>
        {isDone === true ? <del>{content}</del> : content}
      </p>
    </div>
  );
};
export default Movie;
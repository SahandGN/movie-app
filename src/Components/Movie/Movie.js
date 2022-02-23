// import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import MovieContext from '../Context/MovieContext';
import './Movie.css';



const Movie = ({ isFave, topic, content, date, cover, id }) => {
    const { deleteMovie, faveMovie, setId } = useContext(MovieContext);

    return (
        <div className='movie'>
            <span className={`movie-line`}></span>
            <div
                className='movie-status'>
                <button
                    whileTap={{ scale: 2 }}
                    onClick={() => deleteMovie(id)}
                    className='ball movie-close'>
                </button>
                <button
                    whileTap={{ scale: 2 }}
                    onClick={() => setId(id)}
                    className='ball movie-edit' >
                </button>
                <button
                    whileTap={{ scale: 2 }}
                    onClick={() => faveMovie(id)}
                    className='ball movie-fave' >
                </button>
            </div>
            <div
                className='movie-info' >
                <img
                    className='movie-info movie-cover'
                    src={cover}
                    alt={topic + " Cover"} >
                </img>
                <h4
                    className='movie-info movie-title'>
                    {topic}
                    <h4 className='favorie-movie'>
                        {isFave === true ? "(Favorite)" : ""}
                    </h4>
                </h4>
                <p>
                    <h4
                        className='movie-info movie-title'>
                        {date}
                    </h4>
                </p>
                <p
                    className='movie-info movie-content' >
                    {content} </p>
            </div>
        </div>
    );
};
export default Movie;
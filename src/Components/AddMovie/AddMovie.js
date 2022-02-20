import MovieContext from "../Context/MovieContext";
import { useContext, useState } from "react";
import "./AddMovie.css";
import 'bootstrap';
import bootstrap from "bootstrap";


const AddMovie = () => {
  const { addMovies } = useContext(MovieContext);
  const [text, setText] = useState({ topic: "", content: "", date: "", cover: "" });
  const handleTopic = (e) => {
    setText({ ...text, topic: e.target.value });
  };
  const handleContent = (e) => {
    setText({ ...text, content: e.target.value });
  };
  const handleDate = (e) => {
    setText({ ...text, date: e.target.value });
  };
  const handleImage = (e) => {
    setText({ ...text, cover: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setText({ topic: "", content: "", date: "", cover: "" });
    if (text.topic.trim() !== "" && text.content.trim() !== "" && text.date.trim() !== "") {
      addMovies(text.topic, text.content, text.date, text.cover);
      // addMovies(text.topic, text.content);
    } else {
      errorMessage();
    }
  };
  const errorMessage = () => {
    alert("Please fill the form");
  };
  return (
    <div className="add-movie">
      <div className="add-movie-title">
        <h1 className="add-movie-title-subject">Add new movie</h1>
      </div>
      <form onSubmit={handleSubmit} className="add-movie-form">
        <div>
          <p className="add-movie-input">Movie name:</p>
          <input
            value={text.topic}
            onChange={handleTopic}
            className="input"
            type="text"
            placeholder="Type Movie name here..."
          />
        </div>
        <div>
          <p className="add-movie-input">Release date:</p>
          <input
            value={text.date}
            onChange={handleDate}
            className="input"
            type="number"
            placeholder="Type release date..."
          />
        </div>
        <div>
          <p className="add-movie-input">Image:</p>
          <input
            value={text.cover}
            onChange={handleImage}
            className="input"
            type="text"
            placeholder="Type movie cover link..."
          />
        </div>
        <div>
          <p className="add-movie-input">Storyline:</p>
          <textarea
            value={text.content}
            onChange={handleContent}
            className="input add-storyline"
            type="text"
            placeholder="Type something about movie story"
          />
        </div>
        <button
          type="submit"
          whileTap={{ scale: 0.9 }}
          className="submit-btn"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
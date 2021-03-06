import { useContext, useState } from "react";
import MovieContext from "../Context/MovieContext";
import "./PopUp.css";
import 'bootstrap';

const PopUp = () => {
  const [text, setText] = useState({ topic: "", content: "", date: "" , cover:""});
  const { PopUp, setPopUp, editMovie } = useContext(MovieContext);
  const handleSubmit = (e, isOk) => {
    if (isOk === true) {
      editMovie(text);
    }
    setPopUp({ in: false, item: null });
    setText({ topic: "", content: "", date: "" ,cover:""});
  };

  const handleTopic = (e) => {
    setText({ ...text, topic: e.target.value });
  };
  const handleDate = (e) => {
    setText({ ...text, date: e.target.value });
  };
  const handleCover = (e) => {
    setText({ ...text, cover: e.target.value });
  };
  const handleContent = (e) => {
    setText({ ...text, content: e.target.value });
  };
  return (
    <div className={PopUp.in === false ? "pop-up" : "pop-up pop-up-show"}>
      <h4 className="pop-up__title">Are you sure to edit ?</h4>
      <form onSubmit={(e) => handleSubmit(e, true)}>
        <input
          placeholder={
            PopUp.item !== null ?  PopUp.item.topic : "nothing"
          }
          value={text.topic}
          onChange={handleTopic}
          type="text"
          className="pop-up__input"
        />
        <input
          placeholder={
            PopUp.item !== null ? PopUp.item.date : "nothing"
          }
          value={text.date}
          onChange={handleDate}
          type="number"
          className="pop-up__input"
        />
        <input
          placeholder={
            PopUp.item !== null ? "you editing image url" : "nothing"
          }
          value={text.cover}
          onChange={handleCover}
          type="text"
          className="pop-up__input"
        />
        <textarea
          value={text.content}
          onChange={handleContent}
          className="pop-up__content"
          placeholder={PopUp.item !== null ? PopUp.item.content : "nothing"}
        ></textarea>
        <div className="pop-up__buttons">
          <button type="submit" className="pop-up__button ok">
            confirm
          </button>
          <button
            type="submit"
            onClick={(e) => handleSubmit(e, false)}
            className="pop-up__button no"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default PopUp;
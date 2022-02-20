import './App.css';
import Movie from './Components/Movie/Movie';
import AddMovie from './Components/AddMovie/AddMovie';
import Header from './Components/Header/Header';
import { MovieProvider } from './Components/Context/MovieContext';
import PopUp from './Components/PopUp/PopUp';
import OverLay from './Components/OverLay/OverLay';
import Movies from './Components/MovieList/Movies';

function App() {
  return (
    <MovieProvider>
      <PopUp />
      <OverLay />
      <Header />
      <div className='container'>
        <AddMovie />
        <Movies />
      </div>
    </MovieProvider>
  );
}

export default App;

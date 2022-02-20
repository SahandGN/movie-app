import './OverLay.css'
import { useContext } from 'react';
import MovieContext from '../Context/MovieContext';
const OverLay = ({ children }) => {
  const {PopUp} = useContext(MovieContext);
  return <div className={PopUp.in === true ? 'over-lay show' : 'over-lay'}>{children}</div>;
};
export default OverLay;
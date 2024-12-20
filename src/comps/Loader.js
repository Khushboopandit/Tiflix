import { ThemeContext } from '../App';
import {useContext} from 'react'

function Loader() {
  const {loader} = useContext(ThemeContext)
  return (
    loader && <div className="d-flex justify-content-center w-100 my-5"><div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>
  );
}

export default Loader;

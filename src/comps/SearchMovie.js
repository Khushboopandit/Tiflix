// Material ui icons import
import {useContext} from "react"
import SearchIcon from '@mui/icons-material/Search';
import { ThemeContext } from '../App';

function SearchMovie() {
  const { searchValue, setSearchValue,handleSearch } = useContext(ThemeContext);
  return (
    <div className="mb-5">
      <div className="input-group flex-nowrap">
        <span className="input-group-text bg-262833" id="addon-wrapping">
          <SearchIcon style={{color:"#fff",fontSize:30}}/>
        </span>
        <input
          type="text"
          value={searchValue}
          onChange={(e)=>setSearchValue(e.target.value)}
          onKeyDown={(e)=>e.key === 'Enter' && handleSearch()}
          className="form-control bg-262833"
          placeholder="Search for movies"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <p className="info-text">Please press enter to search!</p>
    </div>
  );
}

export default SearchMovie;

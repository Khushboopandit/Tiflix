import React, { useState } from "react";
// Material ui icons import
import SearchIcon from '@mui/icons-material/Search';

function SearchMovie() {
  return (
    <div className="mb-5">
      <div class="input-group flex-nowrap">
        <span class="input-group-text bg-262833" id="addon-wrapping">
          <SearchIcon style={{color:"#fff",fontSize:30}}/>
        </span>
        <input
          type="text"
          class="form-control bg-262833"
          placeholder="Search for movies"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
    </div>
  );
}

export default SearchMovie;

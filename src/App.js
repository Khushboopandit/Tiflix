import React, { useState, useEffect } from "react";
import "./App.css";
import SearchMovie from "./comps/SearchMovie";
import MovieCard from "./comps/MovieCard";
import Loader from "./comps/Loader";
import axios from "axios";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const fetchMovies = async () => {
    setLoader(true);
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${apiKey}&page=${page}&s=${
          searchValue?.length > 0 ? searchValue : "kha"
        }`
      )
      .then(function (response) {
        // handle success
        if (response?.data?.Search) {
          setData([...response?.data?.Search]);
        }
      })
      .catch(function (error) {
        // handle error
        console.error("Error:", error);
      })
      .finally(function () {
        setLoader(false);
        // always executed
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          {/* render search component */}
          <SearchMovie
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            fetchMovies={fetchMovies}
          />
        </div>

        <div className="col-12">
          <div className="row">
            {/* render movie cards component */}
            {data?.map((item) => (
              <div className="col-4" key={`card_${item?.imdbID}`}>
                <MovieCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader loader={loader} />
    </div>
  );
}

export default App;
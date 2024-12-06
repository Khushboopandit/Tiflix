import React, { useState, useEffect } from "react";
import "./App.css";
import SearchMovie from "./comps/SearchMovie";
import MovieCard from "./comps/MovieCard";
import Loader from "./comps/Loader";
import axios from "axios";

function App() {
  // API key from environment variables
  const apiKey = process.env.REACT_APP_API_KEY;
  
  // State Management
  const [page, setPage] = useState(1);              
  const [data, setData] = useState([]);            
  const [loader, setLoader] = useState(false);      
  const [searchValue, setSearchValue] = useState(""); 
  const [hasMore, setHasMore] = useState(true);     

  // Function to fetch movies from OMDB API
  const fetchMovies = async (pageNumber = page) => {
    setLoader(true);
    axios
      .get(
        `https://www.omdbapi.com/?apikey=${apiKey}&page=${pageNumber}&s=${
          searchValue?.length > 0 ? searchValue : "kha" 
        }`
      )
      .then((response)=> {
        if (response?.data?.Search){
          // Update data state: replace all for new search, append for pagination
          setData(prevData => 
            pageNumber === 1 ? response.data.Search : [...prevData, ...response.data.Search]
          );
          // Check if more results exist (OMDB returns 10 results per page)
          setHasMore(response.data.totalResults > pageNumber * 10);
        }else{
          alert("Error: "+ response?.data?.Error);
        }
      })
      .catch((error)=> {
        console.error("Error:", error);
      })
      .finally(()=> {
        setLoader(false);
      });
  };

  // Infinite scroll handler
  const handleScroll = () => {
    // Check if user has scrolled to bottom of page
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      // Load more only if more results exist and not currently loading
      if (hasMore && !loader) {
        setPage(prevPage => prevPage + 1);
      }
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup: remove event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loader]);

  // Fetch movies whenever page number changes
  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  // Handler for search button click
  const handleSearch = () => {
    setPage(1);        
    fetchMovies(1);  
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Search Component */}
        <div className="col-12">
          <SearchMovie
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            handleSearch={handleSearch}
          />
        </div>
        {/* Movie Grid */}
        <div className="col-12">
          <div className="row">
            {data?.map((item) => (
              <div className="col-4" key={`card_${item?.imdbID}`}>
                <MovieCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Loading Indicator */}
      <Loader loader={loader} />
    </div>
  );
}

export default App;
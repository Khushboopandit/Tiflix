import "./App.css";
import SearchMovie from "./comps/SearchMovie";
import MovieCard from "./comps/MovieCard";

function App() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          {/* render search component */}
          <SearchMovie />
        </div>
      </div>
      <div className="col-12">
        <div className="row">
            {/* render movie cards component */}
          <div className="col-4">
            <MovieCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import axios from "axios";
import { version } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=d603f8d2da405d422c0b6dd441888e5c&language=de&page=1"
      )
      .then((response) => {
        setMovies(response.data.results);
        console.log(movies);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar />
      {movies.map((movie) => (
        <p key={movie.id}>{movie?.original_title}</p>
      ))}
      <div className="App"></div>
    </>
  );
}

export default App;

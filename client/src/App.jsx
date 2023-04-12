import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [movieData, setMovieData] = useState(null);

  useEffect(async () => {
    await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=d603f8d2da405d422c0b6dd441888e5c"
    ).then((actualData) => console.log(actualData));
    return () => {}; // no-op
  }, []);

  return (
    <>
      <NavBar />
      <div className="App">Hello</div>
    </>
  );
}

export default App;

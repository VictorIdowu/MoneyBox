import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import FetchData from "./components/store/FetchData";
import Modal from "./components/UI/Modal";
import Movie from "./components/movies/Movie";
import Error from "./components/store/Error";
import AuthContext from "./components/store/auth-context";
import { timeOut } from "./components/store/FetchData";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const Body = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Load Top10 Movies from API bg-primary-300
  useEffect(() => {
    const dataFetcher = function () {
      const route = window.location.pathname.slice(1);
      const id = route.replace("s", "");
      // console.log(id);

      getMovieDetails(`${id}`);
    };
    dataFetcher();
  }, []);

  //  Get Movies Details by #id from API
  const getMovieDetails = async function (id) {
    try {
      if (!id) return;
      await setDisplaySearch(false);
      await setIsLoading(true);
      await setError(false);
      const data = await Promise.race([FetchData(`/${id}`), timeOut(15)]);

      const details = {
        id: data.imdb_id,
        date: data.release_date,
        title: data.title,
        runtime: data.runtime,
        img: data.backdrop_path,
        overview: data.overview,
      };

      if (details.length < 1) {
        await setErrorMsg(`No data found for this request`);
        throw new Error();
      }

      await setMovieDetails(details);
      return setIsLoading(false);
    } catch (err) {
      // console.error(err.message);
      await setIsLoading(false);
      setError(true);
    }
  };

  //  Search for Movies by Name from API
  const searchMovies = async function (name) {
    try {
      await setDisplaySearch(true);
      await setIsLoading(true);
      await setError(false);

      const data = await Promise.race([
        FetchData(
          `/search/movie?query=${name}&api_key=8d75e0c5c8a2e6e3a756946caf9c547f`
        ),
        timeOut(15),
      ]);

      const results = await data.results;

      if ((await results.length) < 1) {
        await setErrorMsg(`No results found for this query (${name})`);
        throw new Error();
      }

      await setSearchResults(await results);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      // console.error(err.message);
      setError(true);
    }
  };

  const hideSearchResults = () => {
    setError(false);
    setDisplaySearch(false);
  };

  const clearError = () => {
    setDisplaySearch(false);
    setError(false);
  };

  return (
    <AuthContext.Provider
      value={{
        searchResults: searchResults,
        loading: isLoading,
        movieDetails: movieDetails,
        error: error,
        errorMsg: errorMsg,
        search: searchMovies,
        getMovieDetails: getMovieDetails,
        hide: hideSearchResults,
        clear: clearError,
      }}
    >
      <div className="relative">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
        {error && <Error color={"secondary-100"} />}
        <Footer />
      </div>
      {displaySearch && <Modal />}
    </AuthContext.Provider>
  );
};

export default Body;

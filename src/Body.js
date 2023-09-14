import Hero from "./components/hero/Hero";
import { useEffect, useState } from "react";
import TopMovies from "./components/movies/TopMovies";
import Footer from "./components/Footer";
import FetchData from "./components/store/FetchData";
import Header from "./components/hero/Header";
import Modal from "./components/UI/Modal";
import Movie from "./components/movies/Movie";
import AuthContext from "./components/store/auth-context";
import { timeOut } from "./components/store/FetchData";

const Body = () => {
  const [topTenMovies, setTopTenMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);
  const [seeDetails, setSeeDetails] = useState(false);
  const [headerClass, setHeaderClass] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Load Top10 Movies from API bg-primary-300
  useEffect(() => {
    const dataFetcher = async function () {
      try {
        const data = await Promise.race([
          FetchData("/movie/top_rated"),
          timeOut(15),
        ]);

        const topTen = await data.results.splice(0, 10);

        if (topTen.length < 1) throw new Error("Empty");

        await setTopTenMovies(topTen);

        if (!window.location.hash) return;
        getMovieDetails(window.location.hash.slice(1));
      } catch (err) {
        console.error(err.message);
      }
    };
    dataFetcher();
  }, [seeDetails]);

  const handleScroll = () => {
    window.scrollY > 0 ? setHeaderClass("bg-primary-300") : setHeaderClass("");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //  Get Movies Details by #id from API
  const getMovieDetails = async function (id) {
    try {
      if (!id) return;
      await setSeeDetails(true);
      await setIsLoading(true);
      await setError(false);
      const data = await Promise.race([FetchData(`/${id}`), timeOut(15)]);

      await setDisplaySearch(false);

      const details = await {
        id: data.imdb_id,
        date: data.release_date,
        title: data.title,
        runtime: data.runtime,
        img: data.backdrop_path,
        overview: data.overview,
      };

      if (details.length < 1) {
        setIsLoading(false);
        throw new Error(`No data found for this request`);
      }

      await setMovieDetails(details);
      return setIsLoading(false);
      // console.log(details);
    } catch (err) {
      // console.error(err);
      await setError(true);
      setErrorMsg(err.message);
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

      await setSearchResults(await results);
      setIsLoading(false);

      // console.log(results);
    } catch (err) {
      console.error(err);
      await setError(true);
      setErrorMsg(err.message);
    }
  };

  const hideSearchResults = () => {
    setDisplaySearch(false);
  };

  return (
    <AuthContext.Provider
      value={{
        searchResults: searchResults,
        loading: isLoading,
        topTenMovies: topTenMovies,
        movieDetails: movieDetails,
        error: error,
        errorMsg: errorMsg,
        search: searchMovies,
        getMovieDetails: getMovieDetails,
        hide: hideSearchResults,
      }}
    >
      <div className="relative">
        {!seeDetails && <Header display={headerClass} />}
        {!seeDetails && <Hero />}
        {!seeDetails && <TopMovies />}
        {seeDetails && <Movie />}
        <Footer />
      </div>
      {displaySearch && <Modal />}
    </AuthContext.Provider>
  );
};

export default Body;

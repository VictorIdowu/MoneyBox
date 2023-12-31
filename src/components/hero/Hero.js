import { useEffect, useState } from "react";
import HeroText from "./HeroText";
import fetchData from "../store/FetchData";

const Hero = () => {
  const [heroMovie, setHeromovie] = useState({});
  const [movies, setMovies] = useState(0);
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prev) => (prev < 4 ? prev + 1 : 0));
  };

  useEffect(() => {
    const intervalId = setInterval(incrementCounter, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const heroMovies = async function () {
      try {
        const data = await fetchData("/movie/popular");
        // console.log(data);
        // console.log(data);
        const movies = await data.results.slice(0, 5);
        // console.log(movies);
        setMovies(movies);
      } catch (err) {
        console.error(err.message);
      }
    };
    heroMovies();
  }, [counter]);

  useEffect(() => {
    const switchMovie = async function () {
      try {
        const movie = {
          overview: await movies[counter].overview.slice(0, 200),
          title: movies[counter].title,
          img: movies[counter].poster_path,
          voteAv: parseFloat(movies[counter].vote_average),
        };
        setHeromovie(movie);
      } catch (err) {
        // console.error(err);
      }
    };
    switchMovie();
  }, [counter, movies]);

  return (
    <section className="h-[90vh] relative" data-testid="movie-backdrop">
      <img
        src={`https://image.tmdb.org/t/p/original${heroMovie.img}`}
        alt={heroMovie.title}
        className="h-[90vh] w-full absolute left-0 top-0 bottom-0 right-0 brightness-50 object-cover transition-all duration-500"
      />
      <HeroText counter={counter} item={heroMovie} />
    </section>
  );
};

export default Hero;

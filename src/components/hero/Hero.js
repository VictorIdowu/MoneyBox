import { useEffect } from "react";
import HeroText from "./HeroText";
import fetchData from "../store/FetchData";

const Hero = () => {
  useEffect(() => {
    const heroMovies = async function () {
      try {
        const data = await fetchData("/movie/popular");
        console.log(data.results.splice(0, 5));
      } catch (err) {
        console.error(err.message);
      }
    };
    heroMovies();
  }, []);
  // max-w-full h-fit

  return (
    <section className="md:h-screen relative" data-testid="movie-backdrop">
      <img
        src="https://images.hdqwalls.com/download/john-wick-3-parabellum-poster-qf-1440x900.jpg"
        alt=""
        className="h-96 md:h-screen w-full absolute left-0 top-0 bottom-0 right-0 brightness-50 object-cover"
      />
      <HeroText />
    </section>
  );
};

export default Hero;

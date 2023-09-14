import { Fragment, useEffect, useState } from "react";
import Header from "./hero/Header";
import Hero from "./hero/Hero";
import TopMovies from "./movies/TopMovies";
import fetchData from "./store/FetchData";
import { timeOut } from "./store/FetchData";

const Home = () => {
  const [headerClass, setHeaderClass] = useState("");
  const [topTenMovies, setTopTenMovies] = useState([]);

  const handleScroll = () => {
    window.scrollY > 0 ? setHeaderClass("bg-primary-300") : setHeaderClass("");
  };

  useEffect(() => {
    const dataFetcher = async function () {
      try {
        const data = await Promise.race([
          fetchData("/movie/top_rated"),
          timeOut(15),
        ]);

        const topTen = await data.results.splice(0, 10);

        if (topTen.length < 1) throw new Error("Empty");

        await setTopTenMovies(topTen);
      } catch (err) {
        console.error(err.message);
      }
    };
    dataFetcher();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <Header display={headerClass} />
      <Hero />
      <TopMovies movies={topTenMovies} />
    </Fragment>
  );
};

export default Home;

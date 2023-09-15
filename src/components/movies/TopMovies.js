import MovieCard from "./MovieCard";
import { Icon } from "@iconify/react";

const TopMovies = (props) => {
  return (
    <section className="px-10 mt-16 md:mt-28">
      <aside className="flex justify-between items-center mb-3 md:mb-10 md:px-3">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">
          Top Movies
        </h2>

        <button className="flex text-sm gap-1 md:gap-2 text-secondary-100 items-center hover:text-secondary-200 hover:translate-x-1 transition-all duration-500">
          See More <Icon icon="ooui:next-ltr" className="" />
        </button>
      </aside>
      <aside className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 lg:gap-x-10 lg:gap-y-24">
        {props.movies.map((item, i) => (
          <MovieCard item={item} key={i + 1} />
        ))}
      </aside>
    </section>
  );
};

export default TopMovies;

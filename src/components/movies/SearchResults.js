import MovieCard from "./MovieCard";
import Spinner from "../store/Spinner";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { Icon } from "@iconify/react";
import Error from "../store/Error";

const SearchResults = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <section className="px-4 md:px-16 pb-10 absolute bg-secondary-100 shadow-2xl shadow-primary-200 top-0 left-0 w-10/12 h-fit z-50">
      {!ctx.loading && !ctx.error && (
        <aside className="text-primary-100 flex justify-between items-center mt-16 md:mt-28 mb-3 sm:mb-5 md:mb-10 px-3">
          <h2 className="text-xl md:text-4xl font-bold">Search Results</h2>
          <Icon
            icon="iconoir:cancel"
            className="text-3xl md:text-5xl cursor-pointer"
            onClick={ctx.hide}
          />
        </aside>
      )}
      {!ctx.loading && !ctx.error && (
        <aside className="grid grid-col-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-10 md:gap-y-24">
          {ctx.searchResults.map((item, i) => (
            <MovieCard item={item} key={i + 1} />
          ))}
        </aside>
      )}
      {ctx.loading && !ctx.error && <Spinner color={"text-primary-100"} />}
      {ctx.error && !ctx.loading && <Error color={"primary-100"} />}
    </section>
  );
};

export default SearchResults;

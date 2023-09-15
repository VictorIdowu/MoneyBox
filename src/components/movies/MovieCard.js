import { useContext, useState } from "react";
import Rating from "../Rating";
import { Icon } from "@iconify/react";
import AuthContext from "../store/auth-context";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const [fav, setFav] = useState(false);
  const ctx = useContext(AuthContext);

  const favClass = `p-1 border-primary-200 border-2 bg-opacity-50 rounded-3xl backdrop-blur-none border-opacity-50 justify-start items-start text-3xl cursor-pointer active:scale-110 ${
    fav ? "text-secondary-100" : "text-primary-100"
  }`;

  const loadDetails = async (e) => {
    await ctx.getMovieDetails(`movie/${props.item.id}`);
  };

  return (
    <div
      data-testid="movie-card"
      className="w-full flex-col justify-between items-start  flex bg-primary-300 rounded-tl-2xl rounded-br-2xl overflow-hidden ease-out duration-500 shadow-md hover:shadow-primary-200 hover:shadow-2xl"
    >
      <div className="relative w-full h-fit">
        <aside className="w-full h-fit shadow-md text-center">
          <img
            className="object-contain"
            src={`https://image.tmdb.org/t/p/original${props.item.poster_path}`}
            onError={(e) => {
              e.target.src =
                "https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg";
            }}
            data-testid="movie-poster"
            alt={props.item.title}
          />
        </aside>
        <div className="px-3 left-0 right-0  top-[15.58px] absolute justify-between items-center flex">
          <p className="px-2 py-1 text-primary-100 bg-primary-200 bg-opacity-50 rounded-xl backdrop-blur-none justify-start items-start text-xs font-bold uppercase">
            Movie
          </p>

          <Icon
            icon="ph:heart-fill"
            className={favClass}
            onClick={() => setFav((prev) => !prev)}
          />
        </div>
      </div>
      <aside className="w-full px-5 flex flex-col gap-5 py-2">
        <p
          className="text-gray-400 text-xs font-bold"
          data-testid="movie-release-date"
        >
          {props.item.release_date}
        </p>
        <Link
          className="text-primary-100 text-lg font-bold cursor-pointer hover:underline transition-all duration-1000"
          onClick={loadDetails}
          to={`movies/${props.item.id}`}
        >
          <p data-testid="movie-title">{props.item.title}</p>
        </Link>
        <Rating display={"justify-between"} />

        <p className="text-primary-200 text-px font-light">
          Action, Adventure, Horror
        </p>
      </aside>
    </div>
  );
};

export default MovieCard;

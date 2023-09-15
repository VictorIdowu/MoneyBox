import { Icon } from "@iconify/react";
import { Fragment, useContext } from "react";
import AuthContext from "../store/auth-context";
import Header from "../hero/Header";
import Spinner from "../store/Spinner";

const Movie = () => {
  const ctx = useContext(AuthContext);

  return (
    <Fragment>
      {/* {ctx.error && !ctx.loading && <Error color={"text-secondary-100"} />} */}
      {ctx.loading && !ctx.error && <Spinner color={"text-secondary-100"} />}
      {!ctx.loading && !ctx.error && (
        <section className="p-2 md:p-10 grid grid-cols-1 xl:grid-rows-2 xl:grid-cols-3 gap-3 md:gap-10 pt-20 md:pt-40">
          <aside className="relative col-span-full">
            <img
              src={
                `https://image.tmdb.org/t/p/original${ctx.movieDetails.img}` ||
                "https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg"
              }
              onError={(e) => {
                e.target.src =
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0IH3RJj3nkLOY79o1pkIcyuUpA9WH8dMMK_wzZ_mPutrFjQWb-8sp4Ik1JNafPg6uDMA&usqp=CAU";
              }}
              alt={ctx.movieDetails.title}
              className="w-full rounded-2xl max-h-96"
              data-testid="movie-backdrop"
            />
            <h3 className="flex flex-col absolute items-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-primary-100 z-20">
              <Icon
                icon="heroicons-solid:play"
                className="text-6xl text-primary-100"
              />
              Watch Trailer
            </h3>
          </aside>
          <aside className="col-span-2 flex flex-col gap-6 md:justify-between pb-6 md:pl-6">
            <div className="text-px lg:text-xl font-medium flex flex-col md:flex-row gap-2 md:gap-5">
              <p data-testid="movie-title" className="font-bold">
                {ctx.movieDetails.title}
              </p>
              <p data-testid="movie-release-date">{ctx.movieDetails.date}</p>

              <p>PG-13</p>
              <span className="flex">
                <p data-testid="movie-runtime">{ctx.movieDetails.runtime}</p>
                mins
              </span>

              <aside className="text-xs flex gap-2">
                {["Action", "Drama"].map((item, i) => (
                  <p
                    className="py-1 px-2 rounded-2xl self-center border border-secondary-100"
                    key={i + 1}
                  >
                    {item}
                  </p>
                ))}
              </aside>
            </div>
            <p data-testid="movie-overview" className="text-base lg:text-lg">
              {ctx.movieDetails.overview}
            </p>
            <div className="text-sm sm:text-lg flex flex-col gap-3">
              <p className="flex gap-1 sm:gap-3">
                Director:
                <span className="text-secondary-100">Joseph Kosinski</span>
              </p>
              <p className="flex gap-1 sm:gap-3">
                Writers:
                <span className="text-secondary-100">
                  Jim Cash, Jack Epps Jr, Peter Craig
                </span>
              </p>
              <p className="flex gap-1 sm:gap-3">
                Stars:
                <span className="text-secondary-100">
                  Tom Cruise, Jennifer Connelly, Miles Teller
                </span>
              </p>
            </div>
            <div className="border border-secondary-100 grid grid-rows-1 grid-col-6 items-center gap-3  rounded-xl overflow-hidden">
              <p className="text-primary-100 bg-secondary-100 py-2 text-center text-xs md:text-lg font-medium rounded-xl">
                Top rated movie #65
              </p>
              <select
                name="choice"
                className="bg-transparent text-xs md:text-lg col-start-2 col-span-4 pr-3"
              >
                <option value="first" className="">
                  Awards 9 nominations
                </option>
              </select>
            </div>
          </aside>
          <aside className="flex flex-col gap-3 sm:gap-6 md:items-end pr-6">
            <p className="flex text-xs md:text-lg gap-1 items-center text-primary-200">
              <Icon icon="twemoji:star" className="text-xl" />
              8.5<span className="!text-primary-300 font-medium">| 350k</span>
            </p>
            <div className="text-px sm:text-xl flex flex-col gap-2 w-full">
              <button className="bg-secondary-100 justify-center items-center text-primary-100 py-2  rounded-md  font-medium w-full flex gap-2">
                <Icon icon="ion:ticket" className="text-px sm:text-2xl" />
                See Showtimes
              </button>
              <button className="py-2 bg-[#e11d473c] border-secondary-100 justify-center items-center border-[1px] rounded-md font-medium w-full flex gap-2">
                <Icon
                  icon="system-uicons:list"
                  className="text-2xl sm:text-3xl"
                />
                More watch options
              </button>
            </div>
            <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden w-fit relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xFOma5ilpFtk5lavNKYpSjyWmr9d7g2OZI7tacA4v2fuXRwyq-aoS6l5ZihBSHCfbAw&usqp=CAU"
                alt="jjj"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpkSJwbpJKMO7nRLiPgtDUfwSmtetC_1EqA&usqp=CAU"
                alt="jjj"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnpkRyMeQ-qm8DHocVJ9F3cwBuy1iTIcyLxClDPOqjbOhgfHlFU0wtu-_MTRbFhSoSd8&usqp=CAU"
                alt="jjj"
              />
              <p className="absolute z-40 bottom-0 left-0 right-0 backdrop-blur-sm py-2 text-primary-100 text-xs sm:text-px text-center rounded-xl flex gap-2 justify-center items-center">
                {" "}
                <Icon
                  icon="system-uicons:list"
                  className="text-2xl sm:text-3xl"
                />
                The best movies and shows in Semptember
              </p>
            </div>
          </aside>
          <Header display={"bg-primary-300"} />
        </section>
      )}
    </Fragment>
  );
};

export default Movie;

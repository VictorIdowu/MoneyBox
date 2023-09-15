import { Icon } from "@iconify/react";
import HeroPagination from "./HeroPagination";
import Rating from "../Rating";

const HeroText = () => {
  return (
    <div className="md:left-10 lg:left-24 justify-between bottom-2 lg:bottom-0 right-10 lg:top-1/2 md:absolute lg:-translate-y-1/2 flex flex-col lg:grid lg:grid-cols-2 lg:gap-48 mb-20 md:mb-0">
      <aside className="px-3 md:p-0 mt-24 sm:mt-16 col-start-1 flex-col justify-start items-start gap-2 sm:gap-5 flex pb-6 md:m-0 z-30">
        <h2
          className="text-primary-100 text-lg sm:text-2xl md:text-5xl font-bold md:leading-[56px]"
          data-testid="movie-title"
        >
          John Wick 3 :<br /> Parabellum
        </h2>

        <Rating />

        <p
          className="text-white text-sm sm:text-base md:text-xl font-medium sm:pr-32 md:p-0 leading-[18px]"
          data-testid="movie-overview"
        >
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button className="px-4 py-2 text-2xl bg-rose-700 rounded-md justify-start items-center gap-2 inline-flex">
          <Icon icon="heroicons-solid:play" className="text-primary-100" />
          <span className="text-primary-100 text-xs sm:text-sm font-bold uppercase leading-normal">
            Watch trailer
          </span>
        </button>
      </aside>
      <HeroPagination />
    </div>
  );
};

export default HeroText;

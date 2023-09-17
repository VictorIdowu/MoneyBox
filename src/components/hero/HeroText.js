import { Icon } from "@iconify/react";
import HeroPagination from "./HeroPagination";
import Rating from "../Rating";

const HeroText = (props) => {
  // md:left-10 lg:left-24 justify-between bottom-2 lg:bottom-0 right-10 lg:top-1/2 md:absolute lg:-translate-y-1/2 flex flex-col lg:grid lg:grid-cols-2 lg:gap-48 mb-20 md:mb-0
  //
  return (
    <div className="md:left-10 lg:left-24 lg:justify-between lg:bottom-0 right-10 top-1/2 absolute -translate-y-1/4 flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-48">
      <aside className="px-3 md:p-0 col-start-1 flex-col justify-start items-start gap-3 flex pb-6 md:m-0 z-30 backdrop-blur-[1px]">
        <h2
          className="text-primary-100 text-lg sm:text-2xl md:text-5xl font-bold md:leading-[56px]"
          data-testid="movie-title"
        >
          {props.item.title}
        </h2>

        <Rating item={props.item} />

        <p
          className="text-white text-sm sm:text-base md:text-xl font-medium sm:pr-32 md:p-0 leading-[18px]"
          data-testid="movie-overview"
        >
          {props.item.overview}...
        </p>
        <button className="px-4 py-2 text-2xl bg-rose-700 rounded-md justify-start items-center mt-1 gap-2 inline-flex">
          <Icon icon="heroicons-solid:play" className="text-primary-100" />
          <span className="text-primary-100 text-xs sm:text-sm font-bold uppercase leading-normal">
            Watch trailer
          </span>
        </button>
      </aside>
      <HeroPagination count={props.counter} />
    </div>
  );
};

export default HeroText;

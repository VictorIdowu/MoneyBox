import { Icon } from "@iconify/react";
const Rating = (props) => {
  // {props.item.voteAv}
  return (
    <div className={`flex gap-10 font-thin ${props.display}`}>
      <p className="justify-start items-center gap-2.5 flex">
        <Icon icon="bxl:imdb" className="text-yellow-500 text-xl sm:text-3xl" />

        <span className="text-primary-100 font-light text-xs leading-3">
          {props.item.voteAv} / 10
        </span>
      </p>
      <p className="justify-start items-center gap-2.5 flex">
        <Icon icon="fxemoji:tomato" className="text-base sm:text-xl" />
        <span className="text-primary-100 font-light text-xs leading-3">
          {props.item.voteAv * 10}%
        </span>
      </p>
    </div>
  );
};

export default Rating;

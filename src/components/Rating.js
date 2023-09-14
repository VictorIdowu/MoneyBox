import { Icon } from "@iconify/react";
const Rating = (props) => {
  return (
    <div className={`flex gap-10 font-thin ${props.display}`}>
      <p className="justify-start items-center gap-2.5 flex">
        <Icon icon="bxl:imdb" className="text-yellow-500 text-3xl" />

        <span className="text-white text-xs font-normal leading-3">
          86.0 / 100
        </span>
      </p>
      <p className="justify-start items-center gap-2.5 flex">
        <Icon icon="fxemoji:tomato" className="text-xl" />
        <span className="text-white text-xs font-normal leading-3">97%</span>
      </p>
    </div>
  );
};

export default Rating;

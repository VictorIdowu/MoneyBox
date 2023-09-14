import { Icon } from "@iconify/react";

const Spinner = (props) => {
  return (
    <div className={`${props.color} flex flex-col gap-5 pt-48 items-center`}>
      <Icon icon="eos-icons:bubble-loading" className="text-6xl" />
      <h2 className="text-xl">Loading...</h2>
    </div>
  );
};

export default Spinner;

import { useEffect, useState } from "react";

const HeroPagination = () => {
  const [isactive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  const activeClass = `pagination ${
    isactive
      ? "border-t-4 border-secondary-100 lg:border-t-0 lg:border-l-4 font-bold"
      : ""
  }`;
  return (
    <div className="col-start-2 place-self-center justify-self-end relative mb-3 md:m-0 pr-3 md:p-0 z-30 object-cover">
      <div className="flex lg:flex-col items-center gap-2.5">
        <div className={`pagination`}>1</div>
        <div className={`pagination`}>2</div>
        <div className={activeClass}>3</div>
        <div className={`pagination`}>4</div>
        <div className={`pagination`}>5</div>
      </div>
    </div>
  );
};

export default HeroPagination;

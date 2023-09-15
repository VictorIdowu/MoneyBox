const HeroPagination = (props) => {
  return (
    <div className="col-start-2 place-self-center justify-self-end relative mb-3 md:m-0 pr-3 md:p-0 z-30 object-cover">
      <div className="flex lg:flex-col items-center gap-2.5">
        {[1, 2, 3, 4, 5].map((num, i) => {
          return (
            <div
              className={`pagination ${
                props.count === i
                  ? "border-t-4 border-secondary-100 lg:border-t-0 lg:border-l-4 font-bold"
                  : ""
              }`}
              key={i + 1}
            >
              {num}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroPagination;

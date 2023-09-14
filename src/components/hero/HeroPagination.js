const HeroPagination = () => {
  return (
    <div className="col-start-2 place-self-center justify-self-end relative pr-3 md:p-0 z-30">
      <div className="flex-col items-center gap-2.5 inline-flex">
        <div className="text-gray-400 text-xs font-bold leading-[14px]">1</div>
        <div className="text-gray-400 text-xs font-bold leading-[14px]">2</div>
        <div className="text-white text-base font-bold leading-[14px]">3</div>
        <div className="text-gray-400 text-xs font-bold leading-[14px]">4</div>
        <div className="text-gray-400 text-xs font-bold leading-[14px]">5</div>
      </div>
      <div className="w-5 h-1 right-8 md:right-4 top-1/2 translate-y-1/4 absolute bg-primary-100 rounded-md" />
    </div>
  );
};

export default HeroPagination;

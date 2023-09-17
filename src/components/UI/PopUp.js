import { useContext, useEffect, useState } from "react";
import AuthContext from "../store/auth-context";

const PopUp = () => {
  const [loadPop, setLoadPop] = useState("");
  useEffect(() => {
    setLoadPop("-translate-x-full");
  }, []);

  const ctx = useContext(AuthContext);
  return (
    <aside
      className={`fixed gap-2 sm:gap-5 w-fit top-1/4 right-2 bg-primary-300  shadow-lg shadow-[rgba(58,58,58,0.05)] z-50 ${ctx.show} flex flex-col justify-between rounded-xl overflow-hidden`}
    >
      <h2 className="text-base sm:text-lg md:text-2xl text-primary-100 px-1 sm:px-10 pt-4">
        Movie added.
      </h2>
      <div
        className={`w-full ease-out duration-[2s] rounded-full bg-secondary-100 h-4 ${loadPop}`}
      ></div>
    </aside>
  );
};

export default PopUp;

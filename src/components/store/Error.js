import { useContext } from "react";
import AuthContext from "./auth-context";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Error = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <div
      className={`pt-48 text-${props.color} flex flex-col gap-3 items-center`}
    >
      <Icon icon="bxs:error" className="text-8xl" />
      <h2 className="text-3xl">{ctx.errorMsg}</h2>
      <Link
        to="/"
        className={`text-2xl rounded-2xl py-1 px-5 border-${props.color} border-[1px]`}
        onClick={() => ctx.clear()}
      >
        Home
      </Link>
    </div>
  );
};

export default Error;

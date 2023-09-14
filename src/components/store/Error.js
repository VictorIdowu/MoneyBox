import { useContext } from "react";
import AuthContext from "./auth-context";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Error = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <div className={`pt-48 ${props.color} flex flex-col gap-3 items-center`}>
      <Icon icon="bxs:error" className="text-8xl" />
      <h2 className="text-3xl">{ctx.errorMsg || props.msg}</h2>
      <Link
        to="/"
        className="text-2xl text-primary-100 rounded-2xl py-1 px-5 bg-secondary-100"
        onClick={() => ctx.clear()}
      >
        Home
      </Link>
    </div>
  );
};

export default Error;

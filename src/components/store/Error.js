import { useContext } from "react";
import AuthContext from "./auth-context";
import { Icon } from "@iconify/react";

const Error = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <div className={`pt-48 ${props.color} flex flex-col items-center`}>
      <Icon icon="bxs:error" className="text-8xl" />
      <h2 className="text-3xl">{ctx.errorMsg || props.msg}</h2>
    </div>
  );
};

export default Error;

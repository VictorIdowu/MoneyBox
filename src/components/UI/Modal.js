// import { Fragment } from "react";
import ReactDOM from "react-dom";
import SearchResults from "../movies/SearchResults";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const Backdrop = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen shadow-md  backdrop-blur-sm z-50 transition-all duration-500 cursor-pointer"
      onClick={ctx.hide}
    />
  );
};

const portalEl = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <div className="">
      {ReactDOM.createPortal(<Backdrop />, portalEl)}
      {ReactDOM.createPortal(<SearchResults />, portalEl)}
    </div>
  );
};

export default Modal;

import { Icon } from "@iconify/react";
import logo from "../../imgs/Logo.png";
import { useContext, useState } from "react";
import AuthContext from "../store/auth-context";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [inputQuery, setInputQuery] = useState("");
  const ctx = useContext(AuthContext);

  const searchHandler = (e) => {
    e.preventDefault();

    const query = inputQuery.replace(" ", "+");

    // console.log(query);
    ctx.search(query);
    setInputQuery("");
  };

  return (
    <header
      className={`left-3 right-3 top-2 fixed px-3 md:px-0 py-3 flex flex-col gap-5 md:flex-row md:items-center justify-around z-40 rounded-3xl ${props.display}`}
    >
      <Link to="/" className="justify-start items-center gap-6 flex">
        <img src={logo} className="" alt="app logo" />
      </Link>
      {/* Search Form */}
      <form
        className="w-full md:w-[400px] xl:w-[525px] h-9 px-2.5 py-1.5 rounded-md border border-primary-100 justify-between items-center gap-2.5 flex  text-primary-100"
        onSubmit={searchHandler}
      >
        <input
          type="text"
          placeholder="What do you want to watch?"
          className="w-[90%] placeholder:text-gray-300 outline-0 bg-transparent"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
        />
        <button type="submit">
          <Icon icon="tabler:search" />
        </button>
      </form>
      <div className="w-[114px] justify-start items-center gap-[27px] flex">
        <div className="text-white text-base font-bold leading-normal">
          Sign in
        </div>
        <div className="p-1 text-center relative bg-secondary-100 rounded-full">
          <Icon icon="ci:menu-duo-md" className="text-2xl text-primary-100" />
        </div>
      </div>
    </header>
  );
};

export default Header;

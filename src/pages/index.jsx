import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import logo from "../logo.svg";

function index() {
  return (
    <div className="h-screen relative w-screen before:absolute before:top-0 before:left-0 before:w-full before:h-full  before:bg-black/30">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="absolute top-4 left-4 w-10 h-10"
        />
      </Link>
      <img
        src="./discover.jpg"
        alt="discover"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-full pt-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-12 font-medium text-white">
          The web-wide search engine for inspiration, knowledge and lot more
        </h1>
        <SearchForm />
      </div>
      <p className="absolute bottom-2 left-1/2 w-4/5 -translate-x-1/2 text-white/50 text-xs">
        Created using Google-CSE
      </p>
    </div>
  );
}

export default index;

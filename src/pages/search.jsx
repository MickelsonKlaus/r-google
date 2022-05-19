import { Link, useLocation } from "react-router-dom";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import logo from "../logo-dark.svg";
import left from "../left-arrow.svg";
import right from "../right-arrow.svg";
import { useStateValue } from "../State/StateProvider";
import useGoogleSearch from "../Hooks/useGoogleSearch";

export default function Search() {
  let [{ term }] = useStateValue();
  let path = useLocation().search.split("&");
  let q = path[0].split("=")[1].replace(/%20/g, " ");
  let start = path[1].split("=")[1];

  if (!term) {
    term = q;
  }

  const { data } = useGoogleSearch(term, start);
  //console.log(data);

  return (
    <div className="relative w-screen h-screen max-w-full p-4 md:px-10">
      <Link to="/" className="inline-block mb-5">
        <img src={logo} alt="logo" className="w-10 h-10 " />
      </Link>
      <SearchForm />
      <div className="max-w-full w-full min-h-[70vh]">
        {Object.keys(data).length > 0 && data?.error === undefined && (
          <>
            <div className="mt-5 mb-10">
              <p className="text-xs font-medium text-black/50">
                About {data?.queries?.request[0].totalResults || 0} results
              </p>
              {data.items.length > 0 ? (
                <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(100px,210px))] justify-center gap-5 mt-5">
                  {data.items.map((item, i) => {
                    return <Card key={item.cacheId || i} data={item} />;
                  })}
                </div>
              ) : (
                <p className="mt-5 text-sm text-center">No result found</p>
              )}
            </div>
            <ul className="flex items-center justify-center pb-10 mx-auto w-fit">
              <li className="p-2">
                <Link
                  to={`/search?q=${term}&start=${
                    data?.queries?.nextPage[0]?.startIndex > 11 &&
                    data?.queries?.previousPage[0]?.startIndex
                  }`}
                  className="flex items-center justify-start text-xs font-medium opacity-50 hover:opacity-100"
                  style={{
                    pointerEvents:
                      data?.queries?.nextPage[0]?.startIndex === 11
                        ? "none"
                        : "all",
                  }}
                >
                  <img src={left} alt="left arrow" className="w-3 h-3" />
                  Prev
                </Link>
              </li>
              <li className="p-2">
                <Link
                  to={`/search?q=${term}&start=${data?.queries?.nextPage[0]?.startIndex}`}
                  className="flex items-center justify-start text-xs font-medium opacity-50 hover:opacity-100"
                >
                  Next
                  <img src={right} alt="left arrow" className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </>
        )}
        {data?.error && (
          <p className="mt-5 text-center opacity-50">
            Error loading search results
          </p>
        )}
      </div>
    </div>
  );
}

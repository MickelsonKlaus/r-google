import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages"));
const Search = lazy(() => import("./pages/search"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

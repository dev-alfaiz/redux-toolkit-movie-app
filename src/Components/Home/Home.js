import * as React from "react";
import { useDispatch } from "react-redux";
import "./Home.scss";

import { MovieListing } from "../../Components";
import { fetchAsyncMovies } from "../../Features/Movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

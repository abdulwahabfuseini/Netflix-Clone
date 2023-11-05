import Banner from "@/components/movies/Banner";
import ComedyMovies from "@/components/movies/comedy/ComedyMovies";
import RecommendedMovies from "@/components/movies/recommend/RecommendMovies";
import TopRated from "@/components/movies/topRated/TopRated";
import TrendingMovies from "@/components/movies/trending/TrendingMovies";
import Layout from "@/components/layout/Layout";

const Movie = () => {
  return (
    <Layout>
      <Banner />
      <TrendingMovies />
      <ComedyMovies />
      <RecommendedMovies />
      <TopRated />
    </Layout>
  );
};

export default Movie;

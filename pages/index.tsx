import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

import Navbar from "../components/Navbar";
import Billboard from "../components/Billboard";
import MovieList from "../components/MovieList";
import useMoviesList from "../hooks/useMoviesList";

// protect the page from unauthenticated users
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

function Home() {
  const { data: movies = [] } = useMoviesList();
  return (
    <>
      <Navbar />
      <Billboard />
      <div>
        <MovieList title="Trending Now" data={movies} />
      </div>
    </>
  );
}

export default Home;

import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useMoviesList = () => {
  const { data, error, isLoading } = useSWR("/api/movies", fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  return {
    movies: data,
    isLoading,
    isError: error,
  };
};

export default useMoviesList;

import { useEffect, useState } from "react";
import { getMovieDescription } from "../api";

export function useGetMovieDescription(id) {
  const [description, setDescription] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    getMovieDescription(id)
      .then((data) => {
        if (data.Response === "False")
          throw new Error("Can't get Description 🥹");
        setDescription(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, [id]);

  return { description, isLoading, errorMsg: error };
}

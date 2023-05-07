import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Summary = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      fetch(`https://api.tvmaze.com/search/shows?q=all`)
        .then((response) => {
          return response.json();
        })
        .then((jsonData) => {
          setMovieData(jsonData);
          setLoading(false);
        });
    };
    fetchShows();
  }, []);
  let movie = null;
  if (movieData && movieData.length > 0) {
    movie = movieData.find((show) => show.show.id.toString() === id);
  }

  if (loading) {
    return <div>Loading</div>;
  }
  if (movie) {
    return (
      <div>
        <h1>{movie.show.summary}</h1>
      </div>
    );
  }
  return <>No movie exists with this id</>;
};

export default Summary;
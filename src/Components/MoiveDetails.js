import React, { useEffect, useState } from "react";
import moives from "../Apis/moives";
import { useParams } from "react-router-dom";
const MoiveDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  useEffect(() => {
    moives.get(`/movie/${id}`).then((response) => {
      setDetails(response.data);
    });
  }, []);
  console.log(details);
  const renderDetails = () => {
    if (details) {
      return (
        <div className="d-flex mx-auto align-items-center   ">
          <div className="poster mx-3">
            <img
              src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
              alt=""
              className="rounded-3"
            />
          </div>
          <div className="details">
            <h2 className="text-primary text-center">
              {details.original_title}
            </h2>
            <span>{details.original_language}</span>
            <h6 className="text-success">{details.overview}</h6>
            <a href={details.homepage} className="text-decoration-none">
              <button className="btn btn-danger">Watch</button>
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div
          class="spinner-border text-primary text-center mx-auto "
          role="status"
        >
          <span class="visually-hidden text-center">Loading...</span>
        </div>
      );
    }
  };
  return <div className="blogBost container m-3">{renderDetails()}</div>;
};

export default MoiveDetails;

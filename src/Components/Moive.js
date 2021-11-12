import React, { useEffect } from "react";
import { connect } from "react-redux";
import { moiveSearch } from "../actions";
import { Link } from "react-router-dom";

const Moive = ({ searchTerm, searchResult, moiveSearch }) => {
  console.log(searchResult);
  useEffect(() => {
    moiveSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);
  const renderMoives = () => {
    if (searchResult) {
      return searchResult.map((popular) => {
        return (
          <div
            className="col-md-3  mx-auto position-relative my-1"
            key={popular.id}
          >
            <i
              className="bi bi-star-fill position-absolute text-warning "
              style={{
                top: "20px",
                right: "30px",
              }}
            >
              {popular.vote_average}
            </i>
            {/* <span className="position-absolute top-0 start-100"></span> */}
            <Link to={`/details/${popular.id}`}>
              <img
                className="img-fluid cursor-pointer rounded-3"
                src={`https://image.tmdb.org/t/p/w300${popular.poster_path}`}
                alt=""
              />
            </Link>
            <div className=" text-center">
              <h5 className=" text-primary">{popular.original_title}</h5>
              <span className="text-primary">{popular.release_date}</span>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <div className="container">
      <div className="row">{renderMoives()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResult: state.moiveSearch.results,
  };
};
const moive = connect(mapStateToProps, {
  moiveSearch,
})(Moive);

export default moive;

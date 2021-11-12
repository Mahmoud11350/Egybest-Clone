import React, { Component } from "react";

import { connect } from "react-redux";
import { topRated } from "../actions";
class TOPMoives extends Component {
  componentDidMount() {
    this.props.topRated();
  }
  renderTopMoives = () => {
    if (this.props.topMoives) {
      return this.props.topMoives.map((topMoive) => {
        return (
          <div
            className="col-md-3  mx-auto position-relative my-1"
            key={topMoive.id}
          >
            <i
              className="bi bi-star-fill position-absolute text-warning "
              style={{
                top: "20px",
                right: "30px",
              }}
            >
              {topMoive.vote_average}
            </i>
            {/* <span className="position-absolute top-0 start-100"></span> */}
            <img
              className="img-fluid cursor-pointer rounded-3"
              src={`https://image.tmdb.org/t/p/w300${topMoive.poster_path}`}
              alt=""
            />
            <div className=" text-center">
              <h5 className=" text-primary">{topMoive.original_title}</h5>
              <span className="text-primary">{topMoive.release_date}</span>
            </div>
          </div>
        );
      });
    }
  };
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">{this.renderTopMoives()}</div>
        <button className="btn btn-success w-100 mb-3">More</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topMoives: state.topMoives.results,
  };
};
export default connect(mapStateToProps, {
  topRated,
})(TOPMoives);

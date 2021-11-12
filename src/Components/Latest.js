import React, { Component } from "react";
import { connect } from "react-redux";

import { latest } from "../actions";
class Latest extends Component {
  componentDidMount() {
    this.props.latest();
  }

  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          {" "}
          <div
            className="col-md-3  mx-auto position-relative my-1"
            key={this.props.latests.id}
          >
            <i
              className="bi bi-star-fill position-absolute text-warning "
              style={{
                top: "20px",
                right: "30px",
              }}
            >
              {this.props.latests.vote_average}
            </i>
            {/* <span className="position-absolute top-0 start-100"></span> */}
            <img
              className="img-fluid cursor-pointer rounded-3"
              src={`https://image.tmdb.org/t/p/w300${this.props.latests.poster_path}`}
              alt=""
            />
            <div className=" text-center">
              <h5 className=" text-primary">
                {this.props.latests.original_title || this.props.latests.name}
              </h5>
              <span className="text-primary">
                {this.props.latests.release_date ||
                  this.props.latests.first_air_date}
              </span>
            </div>
          </div>
        </div>
        <button className="btn btn-success w-100 mb-3">More</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    latests: state.latest,
  };
};

export default connect(mapStateToProps, {
  latest,
})(Latest);

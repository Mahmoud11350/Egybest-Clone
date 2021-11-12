import React, { Component } from "react";
import { connect } from "react-redux";
import { nowPlaying } from "../actions";

class NowPlaying extends Component {
  componentDidMount() {
    this.props.nowPlaying();
  }
  rendernowPlayings = () => {
    if (this.props.nowPlayings) {
      return this.props.nowPlayings.map((nowPlaying) => {
        return (
          <div
            className="col-md-3  mx-auto position-relative my-1"
            key={nowPlaying.id}
          >
            <i
              className="bi bi-star-fill position-absolute text-warning "
              style={{
                top: "20px",
                right: "30px",
              }}
            >
              {nowPlaying.vote_average}
            </i>
            {/* <span className="position-absolute top-0 start-100"></span> */}
            <img
              className="img-fluid cursor-pointer rounded-3"
              src={`https://image.tmdb.org/t/p/w300${nowPlaying.poster_path}`}
              alt=""
            />
            <div className=" text-center">
              <h5 className=" text-primary">
                {nowPlaying.original_title || nowPlaying.name}
              </h5>
              <span className="text-primary">
                {nowPlaying.release_date || nowPlaying.first_air_date}
              </span>
            </div>
          </div>
        );
      });
    }
  };
  render() {
    console.log(this.props);
    return (
      <div className="container-fluid ">
        <div className="row">{this.rendernowPlayings()}</div>
        <button className="btn btn-success w-100 mb-3">More</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    nowPlayings: state.nowPlaying.results,
  };
};

export default connect(mapStateToProps, {
  nowPlaying,
})(NowPlaying);

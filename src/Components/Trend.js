import React, { Component } from "react";
import { connect } from "react-redux";
import { trending } from "../actions";

class Trend extends Component {
  componentDidMount() {
    this.props.trending();
  }
  renderTrend = () => {
    if (this.props.trends) {
      return this.props.trends.map((trend) => {
        return (
          <div
            className="col-md-3  mx-auto position-relative my-1"
            key={trend.id}
          >
            <i
              className="bi bi-star-fill position-absolute text-warning "
              style={{
                top: "20px",
                right: "30px",
              }}
            >
              {trend.vote_average}
            </i>
            {/* <span className="position-absolute top-0 start-100"></span> */}
            <img
              className="img-fluid cursor-pointer rounded-3"
              src={`https://image.tmdb.org/t/p/w300${trend.poster_path}`}
              alt=""
            />
            <div className=" text-center">
              <h5 className=" text-primary">
                {trend.original_title || trend.name}
              </h5>
              <span className="text-primary">
                {trend.release_date || trend.first_air_date}
              </span>
            </div>
          </div>
        );
      });
    }
  };
  render() {
    console.log(this.props.trends);
    return (
      <div className="container-fluid ">
        <div className="row">{this.renderTrend()}</div>
        <button className="btn btn-success w-100 mb-3">More</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    trends: state.trending.results,
  };
};

export default connect(mapStateToProps, {
  trending,
})(Trend);

import React, { Component } from "react";
import { connect } from "react-redux";
import { upComing } from "../actions";

class UpComing extends Component {
  componentDidMount() {
    this.props.upComing();
  }
  renderupComings = () => {
    if (this.props.upComings) {
      return this.props.upComings.map((upComing) => {
        return (
          <div
            className="col-md-3  mx-auto position-relative my-1"
            key={upComing.id}
          >
            <i
              className="bi bi-star-fill position-absolute text-warning "
              style={{
                top: "20px",
                right: "30px",
              }}
            >
              {upComing.vote_average}
            </i>
            {/* <span className="position-absolute top-0 start-100"></span> */}
            <img
              className="img-fluid cursor-pointer rounded-3"
              src={`https://image.tmdb.org/t/p/w300${upComing.poster_path}`}
              alt=""
            />
            <div className=" text-center">
              <h5 className=" text-primary">{upComing.original_title}</h5>
              <span className="text-primary">{upComing.release_date}</span>
            </div>
          </div>
        );
      });
    }
  };
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">{this.renderupComings()}</div>
        <button
          className="btn btn-success w-100 mb-3"
          onClick={() => this.setState({ page: this.state.page + 1 })}
        >
          More
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    upComings: state.upComing.results,
  };
};

export default connect(mapStateToProps, {
  upComing,
})(UpComing);

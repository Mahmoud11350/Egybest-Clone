import React, { Component } from "react";
import { connect } from "react-redux";
import { popular } from "../actions";
import { Link } from "react-router-dom";

class Popular extends Component {
  state = {
    page: 1,
    moiveId: null,
  };
  componentDidMount() {
    this.props.popular(this.state.page);
  }
  renderPupolarMoives = () => {
    if (this.props.populars) {
      return this.props.populars.map((popular) => {
        return (
          <Link
            to={`/details/${popular.id}`}
            className="text-decoration-none col-sm-6 col-md-3"
            key={popular.id}
          >
            <div
              className=" text-center my-1
             position-relative my-1"
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
              <img
                className="img-fluid cursor-pointer rounded-3"
                src={`https://image.tmdb.org/t/p/w300${popular.poster_path}`}
                alt=""
              />
              <div className=" text-center">
                <h5 className=" text-primary">{popular.original_title}</h5>
                <span className="text-primary">{popular.release_date}</span>
              </div>
            </div>
          </Link>
        );
      });
    }
  };
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">{this.renderPupolarMoives()}</div>
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
    populars: state.popular.results,
  };
};
export default connect(mapStateToProps, {
  popular,
})(Popular);

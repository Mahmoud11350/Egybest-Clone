import React from "react";
import { connect } from "react-redux";
import { topRated, nowPlaying, popular, trending } from "../actions";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  componentDidMount() {
    this.props.topRated();
    this.props.nowPlaying();
    this.props.popular();
    this.props.trending();
  }
  renderPopulars = () => {
    if (this.props.populars) {
      return this.props.populars.map((popular) => {
        return (
          <div className="item m-1 ">
            <i
              className="bi bi-star-fill position-absolute text-warning "
              style={{
                top: "20px",
                right: "30px",
              }}
            >
              {popular.vote_average}
            </i>
            <Link
              to={`/details/${popular.id}`}
              className="text-decoration-none col-sm-6 col-md-3"
              key={popular.id}
            >
              <img
                className="img-fluid rounded-3"
                src={`https://image.tmdb.org/t/p/w500${popular.poster_path}`}
                alt=""
              />
            </Link>
            <div className=" text-center ">
              <h5 className=" text-primary">{popular.original_title}</h5>
              <span className="text-primary">{popular.release_date}</span>
            </div>
          </div>
        );
      });
    }
  };
  renderTopMoives = () => {
    if (this.props.topMoives) {
      return this.props.topMoives.map((topMoive) => {
        return (
          <div className="item m-1" key={topMoive.id}>
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
            <Link
              to={`/details/${topMoive.id}`}
              className="text-decoration-none col-sm-6 col-md-3"
              key={popular.id}
            >
              <img
                className="img-fluid rounded-3"
                src={`https://image.tmdb.org/t/p/w500${topMoive.poster_path}`}
                alt=""
              />
            </Link>
            <div className=" text-center">
              <h5 className=" text-primary">{topMoive.original_title}</h5>
              <span className="text-primary">{topMoive.release_date}</span>
            </div>
          </div>
        );
      });
    }
  };
  renderTrend = () => {
    if (this.props.trends) {
      return this.props.trends.map((trend) => {
        return (
          <div className="item m-1" key={trend.id}>
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
            <Link
              to={`/details/${trend.id}`}
              className="text-decoration-none col-sm-6 col-md-3"
              key={trend.id}
            >
              <img
                className="img-fluid rounded-3"
                src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`}
                alt=""
              />
            </Link>
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
  renderNowPlayings = () => {
    if (this.props.nowPlayings) {
      return this.props.nowPlayings.map((nowPlaying) => {
        return (
          <div className="item m-1" key={nowPlaying.id}>
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
            <Link
              to={`/details/${nowPlaying.id}`}
              className="text-decoration-none col-sm-6 col-md-3"
              key={nowPlaying.id}
            >
              <img
                className="img-fluid rounded-3"
                src={`https://image.tmdb.org/t/p/w500${nowPlaying.poster_path}`}
                alt=""
              />
            </Link>
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
    return (
      <div className="wrap">
        <div className="p-3 bg-light m-3">
          <h4 className="text-info">Populars</h4>
          <OwlCarousel autoplay className="owl-theme">
            {this.renderPopulars()}
          </OwlCarousel>
        </div>
        <div className="p-3 bg-light m-3">
          <h4 className="text-info">Top Moives</h4>
          <OwlCarousel autoplay className="owl-theme">
            {this.renderTopMoives()}
          </OwlCarousel>
        </div>

        <div className="p-3 bg-light m-3">
          <h4 className="text-info">Trend</h4>
          <OwlCarousel autoplay className="owl-theme">
            {this.renderTrend()}
          </OwlCarousel>
        </div>

        <div className="p-3 bg-light m-3">
          <h4 className="text-info">Up Coming</h4>
          <OwlCarousel autoplay className="owl-theme">
            {this.renderNowPlayings()}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topMoives: state.topMoives.results,
    latests: state.latest.results,
    nowPlayings: state.nowPlaying.results,
    populars: state.popular.results,
    trends: state.trending.results,
  };
};
export default connect(mapStateToProps, {
  topRated,
  nowPlaying,
  popular,
  trending,
})(Home);

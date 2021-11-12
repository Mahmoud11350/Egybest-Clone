import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import TopMoives from "./TopMoives";
import Moive from "./Moive";
import Latest from "./Latest";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import UpComing from "./UpComing";
import Trend from "./Trend";
import Aside from "./Aside";
import AsideRight from "./AsideRigth";
import MoiveDetails from "./MoiveDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clicked = React.createRef();
  }

  state = {
    searchTerm: "",
    submitedTerm: null,
  };

  onSubmitClicked = (e) => {
    e.preventDefault();
    this.setState({
      submitedTerm: this.state.searchTerm,
    });
    //  window.location.pathname = "/moive";

    this.clicked.current.click();
  };

  render() {
    console.log(this.clicked.current);
    return (
      <React.Fragment>
        <header className="container d-flex justify-content-between align-items-center p-3">
          <Link to="/" className="text-danger text-decoration-none">
            <h1>
              M<span className="text-success">BEST</span>
            </h1>
          </Link>
          <form
            className="form form-group  w-50"
            onSubmit={this.onSubmitClicked}
          >
            <input
              type="text"
              className="form-control "
              placeholder="Moive or Series or Tv show Search"
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            />
            <Link className="d-none" ref={this.clicked} to="/moive">
              Search
            </Link>
          </form>

          <div className="text-center sign">
            <button className="btn btn-danger">
              Sign In With Google google
              <i className="bi bi-google mx-1"></i>
            </button>
          </div>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="aside-right col-md-2 position-relative">
              <AsideRight />
            </div>

            <div className="main col-md-8">
              <Switch>
                <Route path="/top-moives" component={TopMoives} />
                <Route path="/latest" component={Latest} />
                <Route path="/now-playing" component={NowPlaying} />
                <Route path="/popular" component={Popular} />
                <Route path="/up-coming" component={UpComing} />
                <Route path="/trending" component={Trend} />
                <Route
                  path="/moive"
                  render={() => <Moive searchTerm={this.state.submitedTerm} />}
                />
                <Route path="/details/:id">
                  <MoiveDetails />
                </Route>
                <Route path="/" component={Home} />
              </Switch>
            </div>
            <div className="aside-left col-md-2 position-relative text-center ">
              <Aside />
            </div>
          </div>
          <h5 className="text-center my-2 text-primary">
            MBest Website The Home of Moives and Series Designed by{" "}
            <a
              className="text-decoration-none text-danger"
              href="https://www.facebook.com/profile.php?id=100012477769227"
            >
              Mahmoud Salah
            </a>{" "}
            <i className="bi bi-heart-fill text-danger"></i>
          </h5>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

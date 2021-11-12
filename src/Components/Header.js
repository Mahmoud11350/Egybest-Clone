import { Field, reduxForm } from "redux-form";
const Header = () => {
  const renderInput = ({ input }) => {
    return (
      <input
        className="form-control "
        placeholder="Moives or Series or Tv show Search"
        type="text"
        value={input.value}
        onChange={input.onChange}
      />
    );
  };
  return (
    <header className="container d-flex justify-content-between align-items-center p-3">
      <h2 className="text-danger">
        M<span className="text-success">BEST</span>
      </h2>
      <form className="form form-group w-50" onSubmit>
        <Field name="searchTerm" component={renderInput} />
      </form>

      <button className="btn btn-danger">
        Sign In With Google google
        <i className="bi bi-google mx-1"></i>
      </button>
    </header>
  );
};

export default reduxForm({
  form: "searchTerm",
})(Header);

// <nav className="navbar navbar-expand-lg navbar-light bg-light">
// <div className="container">
//   <NavLink className="navbar-brand" to="/">
//     MahmoudBest
//   </NavLink>
//   <button
//     className="navbar-toggler"
//     type="button"
//     data-bs-toggle="collapse"
//     data-bs-target="#navbarNav"
//     aria-controls="navbarNav"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div
//     className="collapse navbar-collapse justify-content-end"
//     id="navbarNav"
//   >
//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <NavLink className="nav-link active" aria-current="page" to="">
//           Moives
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link active" aria-current="page" to="">
//           Series
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link active" aria-current="page" to="">
//           Latest
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="">
//           Now Playing
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="">
//           Popular
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="">
//           Top Rated
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="">
//           Up Coming
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link active" aria-current="page" to="">
//           Trending
//         </NavLink>
//       </li>
//     </ul>
//   </div>
// </div>
// </nav>

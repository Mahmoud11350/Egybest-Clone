import { NavLink } from "react-router-dom";

const AsideRight = () => {
  return (
    <div className="position-fixed  asideRight">
      <div className="my-3">
        <ul className="list-group bg-light p-3 list-unstyled ">
          <li className="mb-1">
            <NavLink className="text-decoration-none" to="/">
              <i className="bi bi-house-fill me-3"></i> MBest
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink className="text-decoration-none" to="/">
              <i className="bi bi-eye-fill me-3"></i> Most Seen
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink className="text-decoration-none" to="/">
              <i className="bi bi-house-fill me-3"></i> Moives
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink className="text-decoration-none" to="/">
              <i className="bi bi-house-fill me-3"></i> Series
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="my-3">
        <ul className="list-group bg-light p-3 list-unstyled ">
          <li className="mb-1">
            <a className="text-decoration-none" href="/">
              <i className="bi bi-facebook me-3"></i> MBest.page
            </a>
          </li>
          <li className="mb-1">
            <NavLink className="text-decoration-none" to="/">
              <i className="bi bi-instagram me-3"></i> MBes_Official
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink className="text-decoration-none" to="/">
              <i className="bi bi-twitter me-3"></i>MBest.co
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink className="text-decoration-none" to="/">
              <i className="bi bi-pinterest me-3"></i> MBest_Officia
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AsideRight;

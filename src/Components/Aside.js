import { NavLink } from "react-router-dom";
const navButtons = [
  {
    name: "Popular",
    path: "/popular",
  },
  {
    name: "Top Moives",
    path: "/top-moives",
  },
  {
    name: "Trend",
    path: "/trending",
  },
  {
    name: "Now Playing",
    path: "/now-playing",
  },
  {
    name: "Up Coming",
    path: "/up-coming",
  },
];

const Aside = () => {
  const renderAside = navButtons.map((button) => {
    return (
      <li className=" btn btn-primary m-3 " key={button.name}>
        <NavLink
          onClick={() => window.scroll(0, 0)}
          className="text-decoration-none text-white w-100"
          to={button.path}
        >
          {button.name}
        </NavLink>
      </li>
    );
  });
  return (
    <div className="position-fixed mx-auto Aside d-flex ">
      <ul className="list-style-none">{renderAside}</ul>
    </div>
  );
};
export default Aside;

import { Outlet, Link } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="">
          <Link to="/">Home</Link>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item "></li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

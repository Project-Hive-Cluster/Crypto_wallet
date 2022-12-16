import { Link } from "react-router-dom"
const api = `http://${import.meta.env.VITE_API}:${import.meta.env.VITE_PORT}`

export default function Navbar() {
  return (
    <nav
      className="d-print-none navbar navbar-expand-lg navbar-light bg-light"
      style={{
        width: "100vw",
        backgroundColor: "black",
        zIndex: 100,
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand navbar-toggler d-flex"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <span className="navbar-toggler-icon"></span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list-ul"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/logout"} className="dropdown-item">
                    Log Out
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

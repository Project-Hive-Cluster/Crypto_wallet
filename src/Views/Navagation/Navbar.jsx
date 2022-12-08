


export default function Navbar() {
    return (
<header className="navbar bg-dark p-2">
            <section className="navbar-section">
                  <a className="off-canvas-toggle btn btn-link btn-action" href="#sidebar-id">
    <i className="icon icon-menu"></i>
  </a>
    <a href="#" className="btn btn-link">Docs</a>
    <a href="#" className="btn btn-link">Examples</a>
  </section>
  <section className="navbar-center">

  </section>
  <section className="navbar-section">
    <a href="#" className="btn btn-link">Twitter</a>
    <a href="#" className="btn btn-link">GitHub</a>
  </section>
</header>
        )
}
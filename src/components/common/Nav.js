import { Link } from 'react-router-dom'

function Nav() {

  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            👊
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/random-quote" className="navbar-item">
              Random Quote
            </Link>
            <Link to="/create-quote" className="navbar-item">
                Create a quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
import { Link } from 'react-router-dom'

function Home() {
  return (
    <><div className="home">
      <Link Link to="/random-quote">
        <div className="home-card">
          Get a random quote
        </div>
      </Link>
      <Link to="/create-quote">
        <div className="home-card">
        Create your own quote card
        </div>
      </Link>
    </div></>
  )
}

export default Home
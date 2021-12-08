import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Kanye() {
  const [state, setState] = useState({
    joke: '',
  })
  useEffect( () => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const result = await axios.get('https://api.kanye.rest')
    //console.log(result.data.quote)
    setState({
      ...state,
      joke: result.data.quote,
    })
  }
  return (

    <div className="hero-body text-css">
      <div className="background-four">
        <p className="title text-css-four">{state.joke}</p>
      </div>
    </div>

  )
}
export default Kanye
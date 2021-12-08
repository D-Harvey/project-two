import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Ron() {
  const [state, setState] = useState({
    joke: '',
  })
  useEffect( () => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const result = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    //console.log(result.data)
    setState({
      ...state,
      joke: result.data,
    })
  }
  return (

    <div className="hero-body text-css">
      <div className="background-five">
        <p className="title text-css-five">{state.joke}</p>
      </div>
    </div>

  )
}
export default Ron
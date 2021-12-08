import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Chuck() {
  const [state, setState] = useState({
    joke: '',
  })
  useEffect( () => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const result = await axios.get('https://api.chucknorris.io/jokes/random')
    //console.log(result.data.value)
    setState({
      ...state,
      joke: result.data.value,
    })
  }
  return (

    <div>
      <div className="background-two">
        <p className="title text-css-two">{state.joke} <br/> <span className="sub">  'Chuck Norris'</span></p>
      </div>
    </div>

  )
}
export default Chuck
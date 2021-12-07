
import React from 'react'


import { getAllQuotes } from '../../lib/api'

function RandomQuoteCard() {

  const [quotes, setQuotes] = React.useState(null)

  React.useEffect(() => {
    const pullData = async () => {
      const quoteData = await getAllQuotes()
      setQuotes(quoteData.data)
    }
    pullData()
  }, [])


  let randomNumber = 1
  if (quotes) {
    randomNumber = Math.floor(Math.random() * quotes.length)
    console.log(randomNumber)
  }
  
  return (


    
    <section className="hero quote-card">
      {quotes ? (
        <div className="hero-body">
          <p className="title">{quotes[randomNumber].text}</p>
          <p className="subtitle">{quotes[randomNumber].author}</p>
        </div>
          
      ) : (
        <p>loading...</p>
      )
      }
    </section>

  )
}

export default RandomQuoteCard
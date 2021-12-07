import React from 'react'
import { getAllQuotes } from '../../lib/api'
import Loading from '../common/Loading'

function CreateQuoteCard() {

  const [quotes, setQuotes] = React.useState(null)
  const [searchValue, setSearchValue] = React.useState('')
  const isLoading = !quotes
  const noSearch = !searchValue && quotes
  const yesSearch = searchValue && quotes

  React.useEffect(() => {
    const pullData = async () => {
      const quoteData = await getAllQuotes()
      setQuotes(quoteData.data)
    }
    pullData()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchValue(e.target.value)
  }
  // console.log(searchValue)
  const filteredQuotes = (quotes) => {
    console.log('quotes', quotes)
    return quotes?.filter(quote => {
      console.log('quote', quote)
      return quote.text.toLowerCase().includes(searchValue.toLowerCase()) 
    })
  }


  // console.log('quotes', quotes)

  return (

    <><section>
      <input className="input is-large is-rounded"
        type="text"
        placeholder="Large input"
        onChange={handleSearch} />
    </section><section className="hero quote-card">
      {isLoading && <Loading />}
      <div className="card">
        {noSearch && 
      quotes.map(quote => (
        <div className="card-content card-shadow" key={quote.text}>
          <p className="title">
            {quote.text}
          </p>
          <p className="subtitle">
            {quote.author}
          </p>
        </div>  
      ))
        }
      </div>
      <div className="card">
        {yesSearch && (
          filteredQuotes(quotes).map(quote => (
            <div className="card-content card-shadow" key={quote.text}>
              <p className="title">
                {quote.text}
              </p>
              <p className="subtitle">
                {quote.author}
              </p>
            </div>  
        
          )))
        }
      </div>
    </section></>

  )

}

export default CreateQuoteCard



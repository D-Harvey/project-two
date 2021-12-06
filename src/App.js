import axios from 'axios'
import React from 'react'


function App() {
 
  const [quotes, setQuotes] = React.useState(null)
  const [searchValue, setSearchvalue] = React.useState('')

  React.useEffect(() => {
    const pullData = async () => {
      const quoteData = await axios.get('https://type.fit/api/quotes')
      setQuotes(quoteData.data)
    }
    pullData()
  }, [])

  const handleSearch = (e) => {
    setSearchvalue(e.target.value)
  }

  let randomNumber = 1
  if (quotes) {
    randomNumber = Math.floor(Math.random() * quotes.length)
    console.log(randomNumber)
  }
  // const filteredQuotes = (quotes) => {
  //   return quotes.filter(quote => {
  //     return quote.author.toLowerCase().includes(searchValue.toLowerCase())  || 
  //   })
  // }

  
  return (
    <>
      <section>
        <input className='search-box'
          placeholder='Quote search'
          onChange={handleSearch}>
        </input>
      </section>
      <section>
        {quotes ? (
          <div>
            <h4>{quotes[randomNumber].text}</h4>
            <p>{quotes[randomNumber].author}</p>
          </div>
          
        ) : (
          <p>loading...</p>
        )
        }
      </section>
    </>
  )
}

export default App


// const [quotes, setQuotes] = React.useState({
//   text: '',
//   author: '',
// })

// const [searchValue, setSearchvalue] = React.useState('')

// React.useEffect(() => {
//   const pullData = async () => {
//     const quoteData = await axios.get('https://type.fit/api/quotes')
//     setQuotes(quoteData.data)
//   }
//   pullData()
// }, [])

// // const handleSearch = (e) => {
// //   setSearchvalue(e.target.value)
// // }

// // const filteredQuotes = (quotes) => {
// //   const theFilteredQuote = quotes.filter(quote => {
// //     return quote.author.toLowerCase().includes(searchValue.toLowerCase())
// //   })
// // }

// console.log('type', typeof quotes)
// console.log('quotes', quotes.length)
// // console.log(theFilteredQuote)

// return (
//   <section>
//     {/* <input className='search-box'
//       placeholder='Quote search'
//       onChange={handleSearch}>
//     </input> */}
//       {quotes.map(quote => (
//         <div key={quote.text}>
//           <p>{quote.author}</p>
//           <p>{quote.author}</p>
//           </div>
//       ))}
//   </section>
// )
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/common/Home'
import CreateQuoteCard from './components/quoteCards/CreateQuoteCard'
import RandomQuoteCard from './components/quoteCards/RandomQuoteCard'
import CustomQuoteCard from './components/quoteCards/CustomQuoteCard'
import Chuck from './components/quoteCards/Chuck'
import Nav from './components/common/Nav'
//import pexels from './lib/api'
//import SearchBar from './SearchBar'
//import ImageList from './ImageList'


// class App extends React.Component {
//   state = { photos: [] };

//   onSearchSubmit = async (term) => {
//     const response = await pexels.get('/v1/search', {
//       params: {
//         query: term,
//         per_page: 1,
//         page: 1,
//       },
//     })

//     this.setState({ photos: response.data.photos })
//   }

//   render() {
//     return (
//       <div className="container" style={{ marginTop: '10px' }}>
//         <SearchBar onSubmit={this.onSearchSubmit}/>
//         <ImageList images={this.state.photos} />
//       </div>
//     )
//   }
// }

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-quote" element={<RandomQuoteCard />} />
        <Route path="/create-quote" element={<CreateQuoteCard />} />
        <Route path="/custom-quote" element={<CustomQuoteCard />} />
        <Route path="/chuck" element={<Chuck />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App

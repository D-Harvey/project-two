import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/common/Home'
import CreateQuoteCard from './components/quoteCards/CreateQuoteCard'
import RandomQuoteCard from './components/quoteCards/RandomQuoteCard'
import Nav from './components/common/Nav'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-quote" element={<RandomQuoteCard />} />
        <Route path="/create-quote" element={<CreateQuoteCard />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App

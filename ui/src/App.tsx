import { useState } from 'react'
import Header from './components/Header'
import { WpContent } from './styles'
import Hero from './components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <WpContent>
        <Hero />
        <button>criar novo</button>
      </WpContent>
    </>
  )
}

export default App

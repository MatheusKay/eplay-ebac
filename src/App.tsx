import { BrowserRouter } from 'react-router-dom'

import { Container, GlobalCss } from './styles'

import Header from './components/Header'

import Rotas from './routers'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App

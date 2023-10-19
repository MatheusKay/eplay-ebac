import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Container, GlobalCss } from './styles'

import Header from './components/Header'

import Rotas from './routers'
import Footer from './components/Footer'
import { store } from './strore'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Container>
          <Header />
        </Container>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App

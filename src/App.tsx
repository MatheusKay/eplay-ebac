import { Container, GlobalCss } from './styles'

import Header from './components/Header'
import Banner from './components/Header/Banner'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
      <Banner />
    </>
  )
}

export default App

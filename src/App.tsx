import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Container, GlobalCss } from './styles'

import Header from './components/Header'
import Banner from './components/Banner'
// import Product from './components/Product'
// import ProductsList from './components/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        {/* <ProductsList background="black" title="Promoções" /> */}
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App

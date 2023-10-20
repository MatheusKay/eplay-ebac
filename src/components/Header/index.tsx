import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  ContainerHeader,
  HeaderBar,
  CartButton,
  Links,
  LinksItem
} from './style'

import Logo from '../../assets/imagens/logo vetor.svg'
import Carrinho from '../../assets/imagens/shopping-cart 1.svg'

import { open } from '../../strore/reducers/cart'
import { RootReducer } from '../../strore'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const cartOpen = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <ContainerHeader>
        <Link to="/">
          <img src={Logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinksItem>
              <Link to="/categories">Categorias</Link>
            </LinksItem>
            <LinksItem>
              <Link to="#">Novidades</Link>
            </LinksItem>
            <LinksItem>
              <Link to="#">Promoções</Link>
            </LinksItem>
          </Links>
        </nav>
      </ContainerHeader>
      <CartButton onClick={cartOpen}>
        {items.length} - produto(s)
        <img src={Carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header

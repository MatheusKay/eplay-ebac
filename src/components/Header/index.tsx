import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

import {
  ContainerHeader,
  HeaderBar,
  CartButton,
  Links,
  LinksItem,
  Humburgue,
  HeaderRow,
  NavMobile
} from './style'

import Logo from '../../assets/imagens/logo vetor.svg'
import Carrinho from '../../assets/imagens/shopping-cart 1.svg'

import { open } from '../../strore/reducers/cart'
import { RootReducer } from '../../strore'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const cartOpen = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <ContainerHeader>
          <Humburgue onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Humburgue>
          <Link to="/">
            <img src={Logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinksItem>
                <Link
                  title="Clique para acessar a pagina de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </LinksItem>
              <LinksItem>
                <HashLink
                  title="Clique para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </LinksItem>
              <LinksItem>
                <HashLink
                  title="Clique para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </LinksItem>
            </Links>
          </nav>
        </ContainerHeader>
        <CartButton onClick={cartOpen}>
          {items.length}
          <span> - produto(s)</span>
          <img src={Carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinksItem>
            <Link
              title="Clique para acessar a pagina de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinksItem>
          <LinksItem>
            <HashLink
              title="Clique para acessar a seção de em breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </LinksItem>
          <LinksItem>
            <HashLink
              title="Clique para acessar a seção de promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </LinksItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header

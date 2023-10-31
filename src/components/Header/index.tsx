import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

import * as S from './style'

import Logo from '../../assets/imagens/logo vetor.svg'
import cartIcon from '../../assets/imagens/shopping-cart 1.svg'

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
    <S.HeaderBar>
      <S.HeaderRow>
        <S.ContainerHeader>
          <S.Humburgue onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Humburgue>
          <Link to="/">
            <img src={Logo} alt="EPLAY" />
          </Link>
          <nav>
            <S.Links>
              <S.LinksItem>
                <Link
                  title="Clique para acessar a pagina de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinksItem>
              <S.LinksItem>
                <HashLink
                  title="Clique para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </S.LinksItem>
              <S.LinksItem>
                <HashLink
                  title="Clique para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinksItem>
            </S.Links>
          </nav>
        </S.ContainerHeader>
        <S.CartButton onClick={cartOpen}>
          {items.length}
          <span> - produto(s)</span>
          <img src={cartIcon} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinksItem>
            <Link
              title="Clique para acessar a pagina de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              title="Clique para acessar a seção de em breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              title="Clique para acessar a seção de promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinksItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header

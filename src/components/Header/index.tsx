import { Link } from 'react-router-dom'

import { ContainerHeader, HeaderBar, LinkCart, Links, LinksItem } from './style'

import Logo from '../../assets/imagens/logo vetor.svg'
import Carrinho from '../../assets/imagens/shopping-cart 1.svg'

const Header = () => {
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
      <LinkCart href="#">
        0 - produto(s)
        <img src={Carrinho} alt="Carrinho" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header

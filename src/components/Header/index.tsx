import {
  ContainerHeader,
  HeaderBar,
  Link,
  LinkCart,
  Links,
  LinksItem
} from './style'

import Logo from '../../assets/imagens/logo vetor.svg'
import Carrinho from '../../assets/imagens/shopping-cart 1.svg'

const Header = () => {
  return (
    <HeaderBar>
      <ContainerHeader>
        <img src={Logo} alt="EPLAY" />
        <nav>
          <Links>
            <LinksItem>
              <Link href="#">Categorias</Link>
            </LinksItem>
            <LinksItem>
              <Link href="#">Novidades</Link>
            </LinksItem>
            <LinksItem>
              <Link href="#">Promoções</Link>
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

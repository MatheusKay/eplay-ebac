import { Container } from '../../styles'

import {
  ContainerFooter,
  SectionTitle,
  Links,
  Link,
  FooterSection
} from './style'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <ContainerFooter>
    <Container>
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link to="/categories/#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories/#action">Ação</Link>
          </li>
          <li>
            <Link to="/categories/#fight">Luta</Link>
          </li>
          <li>
            <Link to="/categories/#sport">Esportes</Link>
          </li>
          <li>
            <Link to="/categories/#simulation">Simulação</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">Promoções</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </Container>
  </ContainerFooter>
)

export default Footer

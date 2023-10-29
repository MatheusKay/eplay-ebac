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
            <Link
              title="Click aqui para acessar jogos de RPG"
              to="/categories/#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Click aqui para acessar jogos de Ação"
              to="/categories/#action"
            >
              Ação
            </Link>
          </li>
          <li>
            <Link
              title="Click aqui para acessar jogos de Luta"
              to="/categories/#fight"
            >
              Luta
            </Link>
          </li>
          <li>
            <Link
              title="Click aqui para acessar jogos de Esportes"
              to="/categories/#sport"
            >
              Esportes
            </Link>
          </li>
          <li>
            <Link
              title="Click aqui para acessar jogos de Simulação"
              to="/categories/#simulation"
            >
              Simulação
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link
              title="Click aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </Link>
          </li>
          <li>
            <Link
              title="Click aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em breve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </Container>
  </ContainerFooter>
)

export default Footer

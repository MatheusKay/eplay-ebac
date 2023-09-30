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
            <Link href="#">RPG</Link>
          </li>
          <li>
            <Link href="#">Ação</Link>
          </li>
          <li>
            <Link href="#">Aventura</Link>
          </li>
          <li>
            <Link href="#">Esportes</Link>
          </li>
          <li>
            <Link href="#">Simulação</Link>
          </li>
          <li>
            <Link href="#">Estrategia</Link>
          </li>
          <li>
            <Link href="#">FPS</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link href="#">Novidades</Link>
          </li>
          <li>
            <Link href="#">Promoções</Link>
          </li>
          <li>
            <Link href="#">Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </Container>
  </ContainerFooter>
)

export default Footer

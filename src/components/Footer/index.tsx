import { Container } from '../../styles'

import * as S from './style'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.ContainerFooter>
    <Container>
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Click aqui para acessar jogos de RPG"
              to="/categories/#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Click aqui para acessar jogos de Ação"
              to="/categories/#action"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Click aqui para acessar jogos de Luta"
              to="/categories/#fight"
            >
              Luta
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Click aqui para acessar jogos de Esportes"
              to="/categories/#sport"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Click aqui para acessar jogos de Simulação"
              to="/categories/#simulation"
            >
              Simulação
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Click aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Click aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </Container>
  </S.ContainerFooter>
)

export default Footer

import { Imagem, Titulo, Precos } from './style'

import BannerImg from '../../assets/imagens/imagem-homem-aranha.png'
import { Container } from '../../styles'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${BannerImg})` }}>
    <Container>
      <Tag size="big">Destaque do dia</Tag>
      <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
      <div className="container-infos">
        <Precos>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Precos>
        <Button
          type="link"
          title="Clique aqui para aproveitar essa oferta"
          to="/produto"
        >
          Aproveitar
        </Button>
      </div>
    </Container>
  </Imagem>
)

export default Banner

import { Imagem, Titulo, Precos } from './style'

import BannerImg from '../../../assets/imagens/imagem-homem-aranha.png'
import { Container } from '../../../styles'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${BannerImg})` }}>
    <Container>
      <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
      <Precos>
        De <span>R$ 250,00</span> <br />
        por apenas R$ 99,90
      </Precos>
    </Container>
  </Imagem>
)

export default Banner

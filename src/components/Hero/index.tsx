import { Banner, Infos } from './style'

import { Container } from '../../styles'
import Tag from '../Tag'

import bannerImg from '../../assets/imagens/fundo_hogwarts.png'
import Button from '../Button'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <Container>
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts legacy</h2>
        <p>
          <span>De R$250,00</span>
          Por R$ 199,00
        </p>
        <Button
          type="button"
          title="Click para adicionar ao carrinho"
          variant="primary"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </Container>
  </Banner>
)

export default Hero

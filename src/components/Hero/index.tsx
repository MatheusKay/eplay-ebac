import { Banner, Infos } from './style'

import { Container } from '../../styles'
import Tag from '../Tag'

import Button from '../Button'

import { Game } from '../../pages/Home'
import { formaPreco } from '../ProductsList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <Container>
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De {formaPreco(game.prices.old)}</span>
          )}
          {game.prices.current && <>Por {formaPreco(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button
            type="button"
            title="Click para adicionar ao carrinho"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </Container>
  </Banner>
)

export default Hero

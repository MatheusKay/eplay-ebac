import { useDispatch } from 'react-redux'

import Tag from '../Tag'

import Button from '../Button'

import { Game } from '../../pages/Home'
import { parseToBrl } from '../../ultis'

import { add, open } from '../../strore/reducers/cart'

import { Banner, Infos } from './style'
import { Container } from '../../styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
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
              <span>De {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {parseToBrl(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Click para adicionar ao carrinho"
              variant="primary"
              onClick={addCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </Container>
    </Banner>
  )
}

export default Hero

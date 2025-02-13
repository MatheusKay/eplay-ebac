import Product from '../Product'
import Loader from '../Loader'

import { parseToBrl } from '../../ultis'

import { Container } from '../../styles'
import * as S from './style'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ background, title, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.ContainerList id={id} background={background}>
      <Container>
        <S.Title>{title}</S.Title>
        <S.List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  title={game.name}
                  image={game.media.thumbnail}
                  category={game.details.category}
                  system={game.details.system}
                  description={game.description}
                  infos={getGameTags(game)}
                />
              </li>
            ))}
        </S.List>
      </Container>
    </S.ContainerList>
  )
}

export default ProductsList

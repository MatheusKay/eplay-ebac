import Product from '../Product'
import { Game } from '../../pages/Home'

import { Container } from '../../styles'
import { ContainerList, List, Titulo } from './style'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

export const formaPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ background, title, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formaPreco(game.prices.current))
    }

    return tags
  }

  return (
    <ContainerList background={background}>
      <Container>
        <Titulo>{title}</Titulo>
        <List>
          {games.map((game) => (
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
        </List>
      </Container>
    </ContainerList>
  )
}

export default ProductsList

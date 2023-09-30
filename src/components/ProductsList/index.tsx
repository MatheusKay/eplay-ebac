import Product from '../Product'
import Game from '../../models/Games'

import { Container } from '../../styles'
import { ContainerList, List, Titulo } from './style'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <ContainerList background={background}>
    <Container>
      <Titulo>{title}</Titulo>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            image={game.image}
            category={game.category}
            system={game.system}
            description={game.description}
            infos={game.infos}
          />
        ))}
      </List>
    </Container>
  </ContainerList>
)

export default ProductsList

import Product from '../Product'
import { Container } from '../../styles'
import { ContainerList, List, Titulo } from './style'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <ContainerList>
    <Container>
      <Titulo>{title}</Titulo>
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </Container>
  </ContainerList>
)

export default ProductsList

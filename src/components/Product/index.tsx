import Tag from '../Tag'

import { Card, Descricao, Titulo } from './style'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic esse alias
      accusamus fuga incidunt cum iusto earum reprehenderit aliquam aperiam
      quam, a itaque laboriosam dignissimos obcaecati voluptates, suscipit,
      rerum quasi.
    </Descricao>
  </Card>
)

export default Product

import Tag from '../Tag'

import { Card, Descricao, Titulo, TagsInfo } from './style'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  image,
  infos,
  id
}: Props) => {
  const getDescricao = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }

    return description
  }

  return (
    <Card
      title={`Clique aqui para acessar mais detalhes do jogo ${title}`}
      to={`/products/${id}`}
    >
      <img src={image} alt={title} />
      <TagsInfo>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </TagsInfo>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getDescricao(description)}</Descricao>
    </Card>
  )
}

export default Product

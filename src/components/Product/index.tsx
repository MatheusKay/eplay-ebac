import Tag from '../Tag'

import * as S from './style'

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
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }

    return text
  }

  return (
    <S.Card
      title={`Clique aqui para acessar mais detalhes do jogo ${title}`}
      to={`/products/${id}`}
    >
      <img src={image} alt={title} />
      <S.TagsInfo>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.TagsInfo>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Description>{getDescription(description)}</S.Description>
    </S.Card>
  )
}

export default Product

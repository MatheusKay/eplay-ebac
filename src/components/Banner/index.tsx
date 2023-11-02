import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import { parseToBrl } from '../../ultis'
import { useGetFeaturedGameQuery } from '../../services/api'

import * as S from './style'
import { Container } from '../../styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <Container>
        <Tag size="big">Destaque do dia</Tag>
        <S.Title>{game.name}</S.Title>
        <div className="container-infos">
          <S.Prices>
            De <span>{parseToBrl(game.prices.old)}</span> <br />
            por apenas {parseToBrl(game.prices.current)}
          </S.Prices>
          <Button
            type="link"
            title="Clique aqui para aproveitar essa oferta"
            to={`/products/${game.id}`}
          >
            Aproveitar
          </Button>
        </div>
      </Container>
    </S.Image>
  )
}

export default Banner

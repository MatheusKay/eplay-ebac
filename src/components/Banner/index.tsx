import { useEffect, useState } from 'react'

import { Imagem, Titulo, Precos } from './style'
import { Container } from '../../styles'

import Tag from '../Tag'
import Button from '../Button'

import { Game } from '../../pages/Home'
import { formaPreco } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque').then((res) =>
      res.json().then((res) => setGame(res))
    )
  }, [])

  if (!game) {
    return <p>Carregando...</p>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <Container>
        <Tag size="big">Destaque do dia</Tag>
        <Titulo>{game.name}</Titulo>
        <div className="container-infos">
          <Precos>
            De <span>{formaPreco(game.prices.old)}</span> <br />
            por apenas {formaPreco(game.prices.current)}
          </Precos>
          <Button
            type="link"
            title="Clique aqui para aproveitar essa oferta"
            to="/produto"
          >
            Aproveitar
          </Button>
        </div>
      </Container>
    </Imagem>
  )
}

export default Banner

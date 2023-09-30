import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'

import resident from '../../assets/imagens/resident_evil.png'
import fifa from '../../assets/imagens/fifa23.png'
import diablo from '../../assets/imagens/diablo.png'
import starWars from '../../assets/imagens/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['R$ 250,00', '10%'],
    title: 'Resident Evil 4'
  },
  {
    id: 2,
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['R$ 250,00', '10%'],
    title: 'Resident Evil 4'
  },
  {
    id: 3,
    category: 'Esporte',
    system: 'PS5',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa,
    infos: ['R$ 350,00', '10%'],
    title: 'Fifa 23'
  },
  {
    id: 4,
    category: 'Esporte',
    system: 'PS5',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa,
    infos: ['R$ 350,00', '10%'],
    title: 'Fifa 23'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    system: 'PS5',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    infos: ['23/06'],
    title: 'Diablo IV'
  },
  {
    id: 6,
    category: 'RPG',
    system: 'PS5',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    infos: ['23/06'],
    title: 'Diablo IV'
  },
  {
    id: 7,
    category: 'Aventura',
    system: 'PS5',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: starWars,
    infos: ['17/05'],
    title: 'Star Wars Jedi Survivor'
  },
  {
    id: 8,
    category: 'Aventura',
    system: 'PS5',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: starWars,
    infos: ['17/05'],
    title: 'Star Wars Jedi Survivor'
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} background="gray" title="RPG" />
    <ProductsList games={emBreve} background="black" title="Ação" />
    <ProductsList games={promocoes} background="gray" title="Aventura" />
    <ProductsList games={emBreve} background="black" title="FPS" />
  </>
)

export default Categories

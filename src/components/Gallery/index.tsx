import Section from '../Section'

import { Item, Items } from './style'

import diablo from '../../assets/imagens/diablo.png'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={diablo} alt="Capa do Diablo IV" />
      </Item>
      <Item>
        <img src={diablo} alt="Capa do Diablo IV" />
      </Item>
      <Item>
        <img src={diablo} alt="Capa do Diablo IV" />
      </Item>
      <Item>
        <img src={diablo} alt="Capa do Diablo IV" />
      </Item>
    </Items>
  </Section>
)

export default Gallery

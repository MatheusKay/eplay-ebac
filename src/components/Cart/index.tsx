import Button from '../Button'

import {
  Overlay,
  CartContainer,
  SideBar,
  Prices,
  Quantity,
  CardItem
} from './style'

import diablo from '../../assets/imagens/diablo.png'
import Tag from '../Tag'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <SideBar>
      <ul>
        <CardItem>
          <img src={diablo} alt="" />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CardItem>
        <CardItem>
          <img src={diablo} alt="" />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CardItem>
      </ul>
      <Quantity>2 jogo(s) no carrinho</Quantity>
      <Prices>
        Total de R$ 250,00 <span>em ate 6x sem juros</span>
      </Prices>
      <Button title="Clique aqui para finalizar a compra" type="button">
        Continar com a compra
      </Button>
    </SideBar>
  </CartContainer>
)

export default Cart

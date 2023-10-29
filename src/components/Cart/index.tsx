import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { formaPreco } from '../ProductsList'
import { RootReducer } from '../../strore'
import { close, remove } from '../../strore/reducers/cart'

import {
  Overlay,
  CartContainer,
  SideBar,
  Prices,
  Quantity,
  CardItem
} from './style'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const cartClose = () => {
    dispatch(close())
  }

  const removeCart = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrices = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={cartClose} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CardItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formaPreco(item.prices.current)}</span>
              </div>
              <button onClick={() => removeCart(item.id)} type="button" />
            </CardItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de {formaPreco(getTotalPrices())}{' '}
          <span>em ate 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para finalizar a compra" type="button">
          Continar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart

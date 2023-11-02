import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { getTotalPrices, parseToBrl } from '../../ultis'
import { RootReducer } from '../../strore'
import { close, remove } from '../../strore/reducers/cart'

import * as S from './style'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartClose = () => {
    dispatch(close())
  }

  const removeCart = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    cartClose()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={cartClose} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CardItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBrl(item.prices.current)}</span>
                  </div>
                  <button onClick={() => removeCart(item.id)} type="button" />
                </S.CardItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
            <S.Prices>
              Total de {parseToBrl(getTotalPrices(items))}{' '}
              <span>em ate 6x sem juros</span>
            </S.Prices>
            <Button
              onClick={goToCheckout}
              title="Clique aqui para finalizar a compra"
              type="button"
            >
              Continar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            o carrinho esta vazio, adicione pelo menos um jogo para continuar a
            compra
          </p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart

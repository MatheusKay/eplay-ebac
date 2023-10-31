import styled from 'styled-components'

import { colors } from '../../styles'
import { TagContainer } from '../Tag/style'
import { ButtonContainer } from '../Button/style'

import close from '../../assets/imagens/fechar.png'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  max-width: 360px;
  width: 100%;
  padding: 40px 16px 0 16px;
  background-color: ${colors.gray};
  z-index: 1;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};

  span {
    display: block;
    font-size: 12px;
    color: ${colors.lightGray};
  }
`

export const Quantity = styled.p`
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
`

export const CardItem = styled.li`
  padding: 8px 0;
  position: relative;
  display: flex;
  border-bottom: 1px solid ${colors.lightGray};

  img {
    height: 80px;
    width: 80px;
    margin-right: 24px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${colors.white};
  }

  button {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 0;
    background-image: url(${close});
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

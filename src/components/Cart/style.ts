import styled from 'styled-components'

import { cores } from '../../styles'
import { TagContainer } from '../Tag/style'
import { ButtonContainer } from '../Button/style'

import fechar from '../../assets/imagens/fechar.png'

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
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const SideBar = styled.aside`
  max-width: 360px;
  width: 100%;
  padding: 40px 16px 0 16px;
  background-color: ${cores.cinza};
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
  color: ${cores.branco};

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`

export const Quantity = styled.p`
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
  color: ${cores.branco};
`

export const CardItem = styled.li`
  padding: 8px 0;
  position: relative;
  display: flex;
  border-bottom: 1px solid ${cores.cinzaClaro};

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
    color: ${cores.branco};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.branco};
  }

  button {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 0;
    background-image: url(${fechar});
    background-color: transparent;
    border: none;
  }
`

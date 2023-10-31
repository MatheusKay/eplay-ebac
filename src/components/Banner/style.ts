import styled from 'styled-components'
import { TagContainer } from '../Tag/style'

export const Image = styled.div`
  width: 100%;
  height: 560px;
  position: relative;
  padding-top: 340px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container-infos {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
    z-index: 1;
  }

  &::after {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`

export const Title = styled.h2`
  max-width: 450px;
  font-weight: bold;
  font-size: 36px;
  position: relative;
  z-index: 1;
`

export const Prices = styled.p`
  margin-top: 24px;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  z-index: 1;

  span {
    text-decoration: line-through;
  }
`

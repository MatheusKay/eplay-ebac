import styled from 'styled-components'
import { Container, breackPoints, cores } from '../../styles'
import { TagContainer } from '../Tag/style'

export const Banner = styled.div`
  height: 480px;
  width: 100%;
  display: block;
  position: relative;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  padding-top: 16px;

  @media (max-width: ${breackPoints.tablet}) {
    background-size: cover;
  }

  &::after {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 50%;
    content: '';
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  ${Container} {
    height: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  max-width: 290px;
  padding: 16px;
  background-color: ${cores.preto};
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`

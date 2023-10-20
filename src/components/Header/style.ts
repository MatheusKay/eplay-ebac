import styled from 'styled-components'

import { breackPoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  padding: 24px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${cores.cinza};
  border-radius: 16px;

  @media (max-width: ${breackPoints.tablet}) {
    display: none;
  }
`

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${cores.branco};
    text-decoration: none;
    font-weight: bold;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinksItem = styled.li`
  margin-right: 16px;
`

export const CartButton = styled.a`
  display: flex;
  color: ${cores.branco};
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  img {
    margin-left: 16px;
  }
`

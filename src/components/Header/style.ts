import styled from 'styled-components'

import { breackPoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breackPoints.tablet}) {
    display: block;
    margin-left: 0;
  }
`

export const HeaderBar = styled.header`
  padding: 24px;
  margin-bottom: 80px;
  background-color: ${colors.gray};
  border-radius: 16px;

  a,
  span {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  h1 {
    line-height: 0;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${breackPoints.tablet}) {
    flex: 1;
    justify-content: space-between;

    ${Links} {
      display: none;
    }
  }
`

export const LinksItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breackPoints.tablet}) {
    margin-right: 16px;

    a {
      padding: 16px 0;
      display: block;
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const CartButton = styled.span`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breackPoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Humburgue = styled.div`
  width: 32px;

  span {
    width: 100%;
    height: 2px;
    margin-bottom: 4px;
    display: block;
    background-color: ${colors.white};
  }

  @media (min-width: ${breackPoints.tablet}) {
    display: none;
  }
`

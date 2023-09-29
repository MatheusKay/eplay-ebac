import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  padding: 24px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${cores.cinza};
  border-radius: 16px;
`

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinksItem = styled.li`
  margin-right: 16px;
`

export const Link = styled.a`
  color: ${cores.branco};
  text-decoration: none;
  font-weight: bold;
`

export const LinkCart = styled(Link)`
  display: flex;

  img {
    margin-left: 16px;
  }
`

import styled from 'styled-components'

import { cores } from '../../styles'

export const ContainerFooter = styled.footer`
  padding: 32px 0;
  background-color: ${cores.cinza};
  font-size: 14px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`

export const SectionTitle = styled.h4`
  margin-bottom: 16px;
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
`

export const Link = styled.a`
  margin-right: 8px;
  color: ${cores.cinzaClaro};
  text-decoration: none;
`

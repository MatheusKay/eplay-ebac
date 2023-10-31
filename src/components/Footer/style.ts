import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'

import { colors } from '../../styles'

export const ContainerFooter = styled.footer`
  padding: 32px 0;
  margin-top: 40px;
  background-color: ${colors.gray};
  font-size: 14px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`

export const SectionTitle = styled.h4`
  margin-bottom: 16px;
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
`

export const Link = styled(HashLink)`
  margin-right: 8px;
  color: ${colors.lightGray};
  text-decoration: none;
`

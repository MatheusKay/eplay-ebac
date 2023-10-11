import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/style'

export const ContainerSection = styled.section<
  Omit<Props, 'title' | 'children'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.preto : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.cinza : cores.preto};
  }

  p {
    max-width: 640px;
    font-size: 14px;
    line-hight: 22px;
  }
`

export const Titulo = styled.h2`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

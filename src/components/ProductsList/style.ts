import styled from 'styled-components'

import { Props } from '.'
import { breackPoints, colors } from '../../styles'
import { Card } from '../Product/style'

export const ContainerList = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: ${breackPoints.descktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breackPoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

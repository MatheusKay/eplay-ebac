import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/style'

export const Card = styled.div`
  padding: 8px;
  position: relative;
  border-radius: 8px;
  background-color: ${cores.cinza};

  img {
    width: 100%;
    height: 250px;
    display: block;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const TagsInfo = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Titulo = styled.h3`
  margin-top: 16px;
  margin-bottom: 8px;
  display: block;
  font-size: 16px;
  font-weight: bold;
`

export const Descricao = styled.p`
  margin-top: 16px;
  display: block;
  font-size: 14px;
  line-height: 22px;
`

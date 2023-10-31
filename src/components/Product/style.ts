import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/style'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  height: 100%;
  padding: 8px;
  display: block;
  position: relative;
  border-radius: 8px;
  background-color: ${colors.gray};
  text-decoration: none;
  color: ${colors.white};

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

export const Title = styled.h3`
  margin-top: 16px;
  margin-bottom: 8px;
  display: block;
  font-size: 16px;
  font-weight: bold;
`

export const Description = styled.p`
  margin-top: 16px;
  display: block;
  font-size: 14px;
  line-height: 22px;
`

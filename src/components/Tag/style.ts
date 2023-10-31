import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  padding: ${(props) => (props.size === 'small' ? '4px 6px' : '8px 16px')};
  display: inline-block;
  border-radius: 8px;
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: ${(props) => (props.size === 'small' ? '10px' : '16px')};
  font-weight: bold;
`

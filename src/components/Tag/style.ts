import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  padding: ${(props) => (props.size === 'small' ? '4px 6px' : '8px 16px')};
  display: inline-block;
  border-radius: 8px;
  background-color: ${cores.verde};
  color: ${cores.branco};
  font-size: ${(props) => (props.size === 'small' ? '10px' : '16px')};
  font-weight: bold;
`

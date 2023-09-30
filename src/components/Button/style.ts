import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  padding: 8px 16px;
  border: 2px solid ${cores.branco};
  border-radius: 8px;
  background-color: transparent;
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  border: 2px solid ${cores.branco};
  border-radius: 8px;
  background-color: transparent;
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`

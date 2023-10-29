import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerCard = styled.div`
  padding: 24px;
  margin-bottom: 40px;
  border-radius: 8px;
  background-color: ${cores.cinza};

  h2,
  h3 {
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: bold;
    color: ${cores.branco};
  }

  .margin-top {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`

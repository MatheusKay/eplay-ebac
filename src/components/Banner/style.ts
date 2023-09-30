import styled from 'styled-components'
import { TagContainer } from '../Tag/style'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  position: relative;
  padding-top: 340px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container-infos {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  max-width: 450px;
  font-weight: bold;
  font-size: 36px;
`

export const Precos = styled.p`
  margin-top: 24px;
  font-size: 24px;
  font-weight: bold;

  span {
    text-decoration: line-through;
  }
`

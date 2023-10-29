import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  margin-top: ${(props) => props.marginTop || '0'};
  display: flex;
  column-gap: 24px;
  align-items: flex-end;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    margin-bottom: 8px;
    display: block;
    font-size: 14px;
  }

  input,
  select {
    width: 100%;
    height: 32px;
    padding: 0 8px;
    background-color: ${cores.branco};
    border: 1px solid ${cores.branco};
  }
`

export const TabButton = styled.button<TabButtonProps>`
  height: 32px;
  padding: 0 8px;
  margin-right: 16px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.branco};
  background-color: ${(props) => (props.isActive ? cores.verde : cores.preto)};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`

export const ButtonForm = styled.button`
  padding: 8px 16px;
  border: 2px solid ${cores.verde};
  border-radius: 8px;
  background-color: ${cores.verde};
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`

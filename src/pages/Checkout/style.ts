import styled from 'styled-components'
import { colors } from '../../styles'

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
    background-color: ${colors.white};
    border: 1px solid ${colors.white};

    &.error {
      border-color: red;
    }
  }
`

export const TabButton = styled.button<TabButtonProps>`
  height: 32px;
  padding: 0 8px;
  margin-right: 16px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`

export const ButtonForm = styled.button`
  padding: 8px 16px;
  border: 2px solid ${colors.green};
  border-radius: 8px;
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`

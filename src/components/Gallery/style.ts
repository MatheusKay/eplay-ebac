import styled from 'styled-components'

import { Container, colors } from '../../styles'

export const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const Action = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.73);
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const Item = styled.li`
  position: relative;
  cursor: zoom-in;

  > img {
    width: 150px;
    height: 150px;
    border: 2px solid ${colors.white};
    border-radius: 8px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  &.is-visible {
    display: flex;
  }

  .overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.73);
  }

  ${Container} {
    position: relative;
    z-index: 1;

    header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;

      h4 {
        font-size: 18px;
        font-weight: bold;
      }

      img {
        cursor: pointer;
      }
    }

    > img,
    iframe {
      max-width: 100%;
      width: 100%;
      display: block;
    }

    iframe {
      width: 100%;
      height: 480px;
    }
  }
`

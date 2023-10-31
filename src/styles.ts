import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#EEEEEE',
  black: '#111111',
  green: '#10AC84',
  gray: '#333333',
  lightGray: '#a3a3a3'
}

export const breackPoints = {
  descktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    padding-top: 40px;
    background-color: ${colors.black};
    color: ${colors.white};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breackPoints.descktop}) {
    max-width: 80%;
  }
`

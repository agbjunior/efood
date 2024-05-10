import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  creme: '#FFEBD9',
  branco: '#FFFFFF',
  ouro: '#FFB930',
  bege: '#FFF8F2'
}

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
  }

  body {
    background-color: ${cores.bege};
    color:${cores.rosa};
    font-family:Roboto, sans-serif;
    text-decoration: none;
    list-style-type: none;
  }
  .container {
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
}

`

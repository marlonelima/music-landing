import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root{
    @media screen and (max-width: 1500px) {
   font-size: 1vw;
  }
  }

  * { margin: 0; padding: 0; }
  body{ font-family: 'Lato', sans-serif; }

  *, input, button{ box-sizing: border-box; padding: 0; margin: 0; background: none; border: none; }

  ul{ list-style: none; }
`

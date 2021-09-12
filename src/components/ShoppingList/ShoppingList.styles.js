import styled from 'styled-components'

export const Wrapper = styled.div`


`

export const Title = styled.h2`
    color: #fda109;
    font-size: 18px;
    font-weight:400;
    text-transform: lowercase;
    height: 32px;

`

export const Array = styled.div `
   height: 424px;
   /* o overflow serve para que se tiver mais dados do que o tamanho da div, ele cria um scrow (rolamento) dentro do tamanho da div */
   overflow-y: auto;
`
import styled from 'styled-components'


export const Wrapper = styled.main`
/* mudando o display para grid para transferir os titulos em colunas */
    display: grid;
    /* dividiando o espaço em três partes exatamente iguais. */
    grid-template-columns: repeat(3, 1fr);
    /* Gerando espaçamento entre as colunas */
    grid-column-gap: 24px;

    padding: 24px;
`
import styled from 'styled-components'
import background from '../../assets/background.jpg'

export const Wrapper = styled.div`
    height: 100vh;

    background-color: #F8F5EC;
    background-image: url(${background});
    /* As duas próximas linhas servem para deixar a imagem única e centralizada */
    background-size: cover;
    background-position: center center;

    /* Centralizando conteúdos */
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 734px;
    height: 574px;

    background-color: #ffffff;

    box-shadow: 0 3px 10px rgba(0,0,0,.15);
    border-radius: 20px;

    
`
export const PriceContainer = styled.div`

    margin-top: 12px;
    h2 {
        font-weight: 400;
        font-size:12px;
        color: #fda109;
    }

    
    div {
        font-size: 24px;
    }


`
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 12px;

    span{
        font-size: 12px;
        color: #fda109;
        margin-bottom: 4px;
    }

`

export const ProgressBar = styled.div`
    height: 14px;
    border-radius:3px;
    background-color: ${props => props.color ? props.color: '#004D61'};
    width: ${props => props.percentage ? props.percentage : 0}%;

    /* espande a barra de forma animada */
    transition: .5s ease;

`


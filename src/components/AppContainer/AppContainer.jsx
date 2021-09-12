import React from "react";
import * as S from './AppContainer.styles'

function AppContainer({ left, middle, right}) {
    return  (
        <S.Wrapper>
            <div>{left}</div>
            <div>{middle}</div>
            <div>{right}</div>
        </S.Wrapper>
    )
}

export default AppContainer;
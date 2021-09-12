import React from "react";
import * as S from './CheckBox.styles'

function CheckBox({value, title, onClick}) {
    return(
        <S.Wrapper onClick = {onClick}>
            <S.Indicator value = {value}/>
               {title}

        </S.Wrapper>
    )
}

export default CheckBox;
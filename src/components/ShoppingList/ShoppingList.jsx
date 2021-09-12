import React from "react";
import CheckBox from "../../shared/CheckBox/CheckBox";
import * as S from './ShoppingList.styles'

function ShoppingList({title, }) {
    return(
        <S.Wrapper >
            <S.Title>
                {title}:
            </S.Title>
            <S.Array>
                <CheckBox value= {true} title="Alface" />
                <CheckBox value= {true} title="Arroz" />
            </S.Array>
        </S.Wrapper>
    )
}

export default ShoppingList;
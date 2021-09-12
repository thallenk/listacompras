import React from "react";
import CheckBox from "../../shared/CheckBox/CheckBox";
import * as S from './ShoppingList.styles'

function ShoppingList({title, products, onToggle}) {
    return(
        <S.Wrapper >
            <S.Title>
                {title}:
            </S.Title>
            <S.Array>
               { 

                products.map(product => 
                <CheckBox 
                key = {product.id}
                value= {product.checked}
                title= {product.name}
                onClick= {() => onToggle(product.id, product.checked)}
                 /> )

               
               
               }

            </S.Array>
        </S.Wrapper>
    )
}

export default ShoppingList;
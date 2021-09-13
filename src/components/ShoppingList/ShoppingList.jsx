import React from "react";
import { useSelector } from "react-redux";
import CheckBox from "../../shared/CheckBox/CheckBox";
import { selectAllProducts, selectSelectedProducts } from "../../store/Products/Products.selectors";
import * as S from './ShoppingList.styles'

function ShoppingList({title, onToggle, displayOnleSelected}) {

    const products = useSelector(
        displayOnleSelected ? selectSelectedProducts : selectAllProducts
    )

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
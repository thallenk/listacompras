import React from "react";
import LineChart from "../../shared/LineChart/LineChart";
import AppContainer from "../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import ShoppingList from "../ShoppingList/ShoppingList";
import * as S from './App.styles'
import extractPercentage from "../../utils/extractPercentage";
import Calculator from "../Calculator";
import { useSelector } from "react-redux";
import { selectAllProducts, selectSelectedProducts, selectSelectedProductsTotalPrice } from "../../store/Products/Products.selectors";
import { useDispatch } from "react-redux";
import { toggleProduct } from "../../store/Products/Products.actions";

function App() {
    const colors = [ '#f4e30d','#fac709','#fda109','#fd7b05', '#ED7014']

    // constante redux
    const products = useSelector(selectAllProducts);
    const selectedProducts = useSelector(selectSelectedProducts)
    const totalPrice = useSelector(selectSelectedProductsTotalPrice)
    const dispatch = useDispatch();

    function handleToggle(id) {
      dispatch(toggleProduct(id))
    }
    return  (
        <S.Wrapper>
            <S.Container>
                <AppHeader/>
                <AppContainer 
                left = {
                    <ShoppingList 
                        title= 'produtos disponíveis'
                        products ={products}
                        onToggle = {handleToggle}
                />}
                middle = {
                    <ShoppingList 
                        title ='sua lista de compras'
                        products ={selectedProducts}
                        onToggle = {handleToggle}
                        displayOnleSelected = 'true'
                />}
                right = {
                    <div>
                        Estatisticas
                        
                        <LineChart 
                        color = {colors[0]} 
                        title = "Saudável" 
                        percentage = {extractPercentage(
                            selectedProducts.length,
                            selectedProducts.filter(product => product.tags.includes('healthy')).length)}/>
                        <LineChart 
                        color = {colors[1]} 
                        title = "Não tão saudável" 
                        percentage = {extractPercentage(
                            selectedProducts.length,
                            selectedProducts.filter(product => product.tags.includes('junk')).length)}/>
                        <LineChart 
                        color = {colors[2]} 
                        title = "Limpeza" 
                        percentage = {extractPercentage(
                            selectedProducts.length,
                            selectedProducts.filter(product => product.tags.includes('cleaning')).length)}/>
                        <LineChart 
                        color = {colors[3]} 
                        title = "Higiene" 
                        percentage = {extractPercentage(
                            selectedProducts.length,
                            selectedProducts.filter(product => product.tags.includes('hygiene')).length)}/>
                        <LineChart 
                        color = {colors[4]} 
                        title = "Outros" 
                        percentage = {extractPercentage(
                            selectedProducts.length,
                            selectedProducts.filter(product => product.tags.includes('others')).length)}/>
                        
                        <S.PriceContainer>
                            <h2>
                                previsão de gastos:
                            </h2>
                            <div>
                                {/* o toLocalelString resolve o problema de float do js e retorna o preço no padrão BR */}
                                {totalPrice.toLocaleString('pt-br', {
                                    minimumFractionDigits:2,
                                    style: 'currency',
                                    currency: 'BRL'
                                })}
                            </div>
                        </S.PriceContainer>
                        <Calculator/>

                    </div>
                } />
            </S.Container>
        </S.Wrapper>
    )
}

export default App;
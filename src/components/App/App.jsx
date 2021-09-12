import React, { useEffect, useState } from "react";
import LineChart from "../../shared/LineChart/LineChart";
import AppContainer from "../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import ShoppingList from "../ShoppingList/ShoppingList";
import productsMock from '../../mocks/products.json'
import * as S from './App.styles'

function App() {
    const colors = [ '#fac709','#fda109','#fd7b05', '#ED7014']



    const [products, setProducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProducts] = useState([])


    useEffect(() => {
        const newSelectedProducts = products.filter((product) => product.checked )
        setSelectedProducts(newSelectedProducts)
    }, [products])
    // const [health, setHealth] = useState(20)

    // muda o estado da barrinha depois de 5 segundos
    // useEffect(() => {
    //     setTimeout(() => {
    //         setHealth(80)
    //     }, 5000)
    // }, [])

    function handleToggle(id) {
        const newProducts = products.map( product => product.id === id ? {...product, checked: !product.checked} : product )
        setProducts(newProducts)
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
                />}
                right = {
                    <div>
                        Estatisticas
                        
                        <LineChart color = {colors[0]} title = "Saudável" percentage = {80}/>
                        <LineChart color = {colors[1]} title = "Não tão saudável" percentage = {20}/>
                        <LineChart color = {colors[2]} title = "Limpeza" percentage = {50}/>
                        <LineChart color = {colors[3]} title = "Outros" percentage = {30}/>
                    </div>
                } />
            </S.Container>
        </S.Wrapper>
    )
}

export default App;
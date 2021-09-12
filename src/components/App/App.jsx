import React, { useState } from "react";
import CheckBox from "../../shared/CheckBox/CheckBox";
import LineChart from "../../shared/LineChart/LineChart";
import AppContainer from "../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import ShoppingList from "../ShoppingList/ShoppingList";
import * as S from './App.styles'

function App() {
    //estados para setar o value da bolinha como true ou false a partir do onClick. 
    const [lettuce, setLettuce] = useState(false);
    const [rice, setRice] = useState(false);
    // const [health, setHealth] = useState(20)

    // muda o estado da barrinha depois de 5 segundos
    // useEffect(() => {
    //     setTimeout(() => {
    //         setHealth(80)
    //     }, 5000)
    // }, [])
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    return  (
        <S.Wrapper>
            <S.Container>
                <AppHeader/>
                <AppContainer 
                left = {
                <ShoppingList 
                title= 'produtos disponíveis'
                products =''/>}
                middle = {
                <ShoppingList title ='sua lista de compras'/> }
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
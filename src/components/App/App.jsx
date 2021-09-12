import React, {useState} from "react";
import CheckBox from "../../shared/CheckBox/CheckBox";
import AppContainer from "../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import * as S from './App.styles'

function App() {
    //estados para setar o value da bolinha como true ou false a partir do onClick. 
    const [lettuce, setLettuce] = useState(false);
    const [rice, setRice] = useState(false);


    return  (
        <S.Wrapper>
            <S.Container>
                <AppHeader/>
                <AppContainer 
                left = {
                    <div>
                        produtos disponíveis:

                        <CheckBox
                        value = {lettuce}
                        title = 'Alface'
                        onClick = {() => setLettuce(!lettuce)}/>
                        <CheckBox
                        value = {rice}
                        title = 'Arroz'
                        onClick = {() => setRice(!rice)}/>
                    </div>
                }
                middle = {
                    <div >
                        Sua lista de Compras
                    </div>
                }
                right = {
                    <div>
                        Estatisticas
                    </div>
                } />
            </S.Container>
        </S.Wrapper>
    )
}

export default App;
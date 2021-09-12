import React from "react";
import AppContainer from "../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import * as S from './App.styles'

function App() {
    return  (
        <S.Wrapper>
            <S.Container>
                <AppHeader/>
                <AppContainer 
                left = {
                    <div style={{backgroundColor: 'red' }}>
                        produtos disponíveis
                    </div>
                }
                middle = {
                    <div style={{backgroundColor: 'blue' }}>
                        Sua lista de Compras
                    </div>
                }
                right = {
                    <div style={{backgroundColor: 'green' }}>
                        Estatisticas
                    </div>
                } />
            </S.Container>
        </S.Wrapper>
    )
}

export default App;
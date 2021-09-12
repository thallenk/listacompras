import React from "react";
import * as S from './LineChart.styles'

function LineChart({ title, percentage, color}) {
    return(
        <S.Wrapper >
            <span>
               { title }
            </span>
            <S.ProgressBar
                color = {color }
                percentage = {percentage}/>
        </S.Wrapper>
    )
}

export default LineChart;
import styled, { css } from 'styled-components';

export const Div = styled.div<{$type:string;}>`
background: #1a162e;
color: #ffffff;
width: 100%;
padding: 10px;
text-align: center;
font-size: 20px;
cursor: pointer;
&:hover{
    background-color: #1a103e;
}
${props => props.$type === 'operator' && css`
    color: orange;
    font-size:22px;
`}
${props => props.$type === 'result' && css`
grid-column-start: 3;
grid-column-end: 5;
width: 100%;
background-color: #FFA238;
text-align: center;
font-size: 25px;
&:hover{
    background-color: #FFA503;
}
`}
`;

export const Buttons = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-column-gap: 5px;
grid-row-gap: 5px;
width: 100%;
height: 80vh;
`;

export const Visor = styled.div`
text-align: right;
display: flex;
flex-direction: column;
justify-content: flex-end;
color: white;
border-bottom: 1px solid blanchedalmond;
height: 20vh;
margin-bottom: 5px;
p{
    float: bottom;
    font-size: 20px;
}
`;

export const CalculatorInterface = styled.div`
display:flex;
flex-direction: column;
border: 1px solid white;
border-radius: 8px;
padding: 10px;
width: 60vh;
height: 60vh;
background-color: #111222;
`
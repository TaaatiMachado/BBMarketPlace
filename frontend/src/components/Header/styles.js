import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
padding: 15px 150px;
background: #350065;

img {
    width:190px;
}
`;



export const Cart = styled(Link)`

display:flex;
align-items: center;
font-family: 'Poppins', sans-serif;
text-decoration: none;
transition: opacity 0.2s;

  &:hover{

    opacity: 0.7;
   }

div {
    text-align: right;
    margin-right: 10px;

    strong { 
        display: block;
        color: #f3e436;

    }

    span{
        font-size: 13px;
        color: #f3e436;

    }
}


`;

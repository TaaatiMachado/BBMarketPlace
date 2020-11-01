import styled from 'styled-components';

import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid; 
  grid-template-columns: repeat(5, 1fr);
  gap:20px;
  margin: 50px;
  padding: 0 150px;
  /* list-styled: none; */

li{
    display:flex;
    flex-direction: column;
    border-radius: 4px;
    background: #f0f0f0;
    padding: 30px;
    font-family: 'Poppins', sans-serif;

    img { 
        align-self: center;
        max-width: 300px;
        border-radius: 6px;
    }

  > strong { 
      font-size: 16px;
      line-height: 20px;
      color:  #350065;
      margin-top: 15px;
  }
  > span { 
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
      color: #350065;
  }

  button{
      background: #350065;
      color: #f3e436;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.10s;

      &:hover { 
            background: ${darken(0.10, '#7159c1')};
      }

      div {
          display: flex;
          align-items: center;
          padding: 12px;
          background: rgba(0, 0, 0, 0.1);

          svg{
              margin-right: 5px;
          }
      }

      span{
          flex:1;
          text-align:center;
          font-weight: bold;
      }
  }
}
`;

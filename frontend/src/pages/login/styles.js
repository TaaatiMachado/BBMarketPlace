import styled from 'styled-components';

export const initialState = {
    email:'',
    senha:''
};

export const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
`;

export const TitleInput = styled.p`
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 10px;
`;

export const LoginTitle = styled.h2`
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 30px;
`;

export const LoginForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 20px 40px 40px;
    background-color: white;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgb(0,0,0,0.3);
    font-family: 'Roboto Condensed', sans-serif;
`;

export const LoginInput = styled.input`
    display: block;
    width: 100%;
    background-color: white;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`;


export const LoginButton = styled.button`
    display: block;
    width: 100%;
    background-color: #350065;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0px 20px;
    cursor: pointer;
    box-sizing: border-box;
`;

export const LoginField = styled.fieldset`
    border: none;
    padding: 5px 10px;
    margin: 20px 0;
`;

export const LoginError = styled.div`
    display: block;
    margin-top:20px;
`;
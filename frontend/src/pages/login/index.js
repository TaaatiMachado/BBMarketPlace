import React from 'react';
import { LoginForm, TitleInput, LoginTitle,LoginWrapper, LoginInput, LoginButton, LoginField, LoginError } from './styles';

export default function Login() {
    return (
        <LoginWrapper>
            <LoginForm>
                <LoginTitle>Login</LoginTitle>
                <TitleInput>Email:</TitleInput>
                <label htmlfor="email"></label>
                <LoginInput type="text" name="email"></LoginInput>
                <TitleInput>Senha:</TitleInput>
                <label htmlfor="senha"></label>
                <LoginInput type="text" name="senha"></LoginInput>
                <LoginField>
                    <label>
                        <input type="radio"/>
                        Mantenha-me conectado
                    </label>
                </LoginField>
                <LoginButton type="submit">Entrar</LoginButton>
                <LoginError>
                    <p>Email ou senha inválida!</p>
                </LoginError>
            </LoginForm>
        </LoginWrapper>
        
    )
};
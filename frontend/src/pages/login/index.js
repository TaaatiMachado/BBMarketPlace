import React from 'react';
import { LoginForm, LoginWrapper, LoginInput, LoginButton, LoginField, LoginError } from './styles';

export default function Home() {
    return (
        <LoginWrapper>
            <LoginForm>
                <h2>Login</h2>
                <label htmlfor="email"></label>
                <LoginInput type="text" name="email"></LoginInput>
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
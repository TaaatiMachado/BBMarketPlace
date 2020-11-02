import React from 'react';
import { LoginForm, LoginTitle, TitleInput, LoginWrapper, LoginInput, LoginButton, LoginField, LoginError } from './styles';

export default function LoginSupplier() {
    return(
        <LoginWrapper>
            <LoginForm>
                <LoginTitle>Login fornecedor</LoginTitle>
                <TitleInput>CNPJ:</TitleInput>
                <label htmlfor="cnpj"></label>
                <LoginInput type="text" name="cnpj"></LoginInput>
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
                    <p>CNPJ ou senha inválida!</p>
                </LoginError>
            </LoginForm>
        </LoginWrapper>
    )
}
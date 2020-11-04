import React, { useState } from 'react';
import { initialState, LoginForm, LoginTitle, TitleInput, LoginWrapper, LoginInput, LoginButton, LoginField, LoginError } from './styles';

export default function LoginSupplier() {

    const [state, setState] = useState(initialState);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        console.log(state);
        event.preventDefault();

        //Validar campos vazios ||
        while(state.senha === '' ||  state.cnpj === ''){
            setError(`Você precisa preencher todos os campos `)
            break;
        }
        while(state.senha != '' &&  state.cnpj != ''){
            setError('')
            break;
        }
        
    }

    const handleInput = (event) => {
        const inputName = event.target.name;
        const value = event.target.value;
        
        setState((ant) => (
            { ...ant, [inputName]: value})
        );
    }

    return(
        <LoginWrapper>
            <LoginForm onSubmit={handleSubmit}>
                <LoginTitle>Login fornecedor</LoginTitle>
                <TitleInput>CNPJ:</TitleInput>
                <LoginInput 
                    type="text" 
                    name="cnpj"
                    value={state.cnpj}
                    onChange={handleInput}
                >    
                </LoginInput>
                <TitleInput>Senha:</TitleInput>
                <LoginInput 
                    type="text" 
                    name="senha"
                    value={state.senha}
                    onChange={handleInput}
                ></LoginInput>
                <LoginField>
                    <label>
                        <input type="radio"/>
                        Mantenha-me conectado
                    </label>
                </LoginField>
                <LoginButton type="submit">Entrar</LoginButton>
                {error && (
                    <LoginError>
                        <p>{error}</p>
                    </LoginError>
                )}
            </LoginForm>
        </LoginWrapper>
    )
}
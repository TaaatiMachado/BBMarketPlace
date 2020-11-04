import React, { useState } from 'react';
import { initialState, LoginForm, TitleInput, LoginTitle,LoginWrapper, LoginInput, LoginButton, LoginField, LoginError } from './styles';



export default function Login() {

    const [state, setState] = useState(initialState);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted!");
        console.log(state);
        //Validar campos vazios
        while(state.senha === ''){
            setError(`Você precisa preencher todos os campos ${state.senha}`)
            break;
        }
        if(state.senha != ''){
            setError('');
        }
        while(state.email === ''){
            setError(`Você precisa preencher todos os campos ${state.email}`);
            break;
        }
        if(state.email != ''){
            setError('');
        }
    }
    
    const handleInput = (event) => {
        const inputName = event.target.name;
        const value = event.target.value;

        setState((ant) => (
            { ...ant, [inputName]: value})
        );

    }
    return (
        <LoginWrapper>
            <LoginForm onSubmit={handleSubmit}>
                <LoginTitle>Login</LoginTitle>
                <TitleInput name="email">Email:</TitleInput>
                <LoginInput 
                    type="email"
                    name="email" 
                    value={state.email} 
                    onChange={handleInput}>    
                </LoginInput>
                <TitleInput>Senha:</TitleInput>
                <LoginInput type="text" name="senha"></LoginInput>
                <LoginField>
                    <label>
                        <input className="mr-2" type="checkbox"/>
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
};
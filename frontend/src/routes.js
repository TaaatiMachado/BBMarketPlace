import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import CadastroCli from './pages/CadastroCli'
import CadastroFor from './pages/CadastroFor'
import CadastroProd from './pages/CadastroProd'
import EditCli from './pages/EditCli'
import EditFor from './pages/EditFor'
import ProdDetalhes from './pages/ProdDetalhes'
import LoggedCli from './pages/LoggedCli'
import LoggedFor from './pages/LoggedFor'



export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/cadastroCli" component={CadastroCli}/>
            <Route path="/cadastroFor" component={CadastroFor}/>
            <Route path="/cadastroProd" component={CadastroProd}/>
            <Route path="/editCli" component={EditCli}/>
            <Route path="/EditFor" component={EditFor}/>
            <Route path="/prodDetalhes" component={ProdDetalhes}/>
            <Route path="/loggedCli" component={LoggedCli}/>
            <Route path="/loggedFor" component={LoggedFor}/>




        </Switch>
    );

}
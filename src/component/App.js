import React, { useContext } from 'react';
import {GlobalContext} from '../context';

function App() {
    const {state, dispatch} = useContext(GlobalContext);
    let data = state.data;
    console.log(data);
    return (
        <h1>Hello jacquit</h1>
    )
}

export default App

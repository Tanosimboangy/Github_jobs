import React, { useContext } from 'react';
import { Switch, Route } from "react-router-dom";
import {GlobalContext} from '../context';
import HeaderPage from '../containes/HeaderPage';
import MainLists from '../containes/MainLists';
import JobDetails from '../containes/JobDetails';


function App() {
    const {state, dispatch} = useContext(GlobalContext);
    let data = state.data;
    let loading = state.loading;
    console.log(data);
    return (
        <>
            <h1><b>Github</b> Jobs</h1>
            <Switch>
                <Route exact path="/">
                    <HeaderPage 
                        data={data} 
                        dispatch={dispatch}
                        />
                    <MainLists 
                        data={data} 
                        dispatch={dispatch}
                        loading={loading}
                    />
                </Route>
                <Route path="/:detail">
                    <JobDetails
                        data={data} 
                        dispatch={dispatch}
                    />
                </Route>
            </Switch>
        </>
    )
}

export default App

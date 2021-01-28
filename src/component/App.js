import React, { useContext } from 'react';
import {GlobalContext} from '../context';


function App() {
    const {state, dispatch} = useContext(GlobalContext);
    let data = state.data;
    return (
        <>
            <h1><b>Github</b> Jobs</h1>
            {/* <Switch>
                <Route exact path="/">
                    <Header 
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
                    <JobDescriptions
                        data={data} 
                        dispatch={dispatch}
                    />
                </Route>
            </Switch> */}
        </>
    )
}

export default App

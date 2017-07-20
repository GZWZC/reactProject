import React from 'react';
import { HashRouter , Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import AskIndex from './containersComponent/AskIndex'
const store = configureStore();


export default class RouteComponent extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <HashRouter>
                    <div>
                        <Route exact path="/" component={AskIndex}/>
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}
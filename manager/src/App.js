import React, { Component } from 'react';
import {View} from 'react-native'
import firebase from 'firebase'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware}  from 'redux'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
import RouterComponent from './Router'
import { CardSection } from './components/common';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger','Setting a timer']);

class App extends Component
{

    componentWillMount()
    {
        firebase.initializeApp({
        /* Put your firebase details here */
        });
    }

    render()
    {
        return(
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                <RouterComponent />
            </Provider>
        );
    }
}

export default App

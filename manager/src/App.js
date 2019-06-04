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
            apiKey: "AIzaSyCVwAYuSWIw4Otfl67Sehpz9G6AbwBKV3c",
            authDomain: "manager-65190.firebaseapp.com",
            databaseURL: "https://manager-65190.firebaseio.com",
            projectId: "manager-65190",
            storageBucket: "manager-65190.appspot.com",
            messagingSenderId: "80985290403",
            appId: "1:80985290403:web:a0066151dca918cc"
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
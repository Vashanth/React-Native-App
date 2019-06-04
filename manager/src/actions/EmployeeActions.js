import {EMP_UPDATE, EMP_CREATE, EMP_FETCH_SUCCESS, EMP_SAVE_SUCCESS} from './types'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';

export const EmployeeUpdate = ({props,value}) =>
{
    return({
        type:EMP_UPDATE,
        payload:({props,value})
    })
}

export const EmployeeNew = ({name,phone,shift}) =>
{
    return (dispatch) =>{
    const {currentUser} = firebase.auth()
    firebase.database().ref(`users/${currentUser.uid}/employee`).push({name,phone,shift}).then(
        ()=>{    dispatch({type:EMP_CREATE})
                Actions.pop();
    }
    );
    }
}

export const EmployeeFetch = () =>
{
    return (dispatch) =>
    {
                const {currentUser} =firebase.auth()
        firebase.database().ref(`users/${currentUser.uid}/employee`).on('value',
        snapshot => dispatch({type:EMP_FETCH_SUCCESS,payload:snapshot.val()})
        )
    }
}

export const EmployeeSave = ({name,phone,shift,uid}) =>
{
    console.log(name,phone,shift)
    const {currentUser} = firebase.auth();
    return (dispatch) =>
    {
        dispatch({type:EMP_SAVE_SUCCESS});
        firebase.database().ref(`users/${currentUser.uid}/employee/${uid}`).set({name,phone,shift}).then(()=>console.log('SAVED'));
        Actions.pop();
    }
}

export const EmployeeClear= () =>
{
    return({
        type:EMP_SAVE_SUCCESS
    })
}

export const EmployeeDelete = ({uid}) =>
{
    const {currentUser} = firebase.auth();
    return() =>
    {
        firebase.database().ref(`users/${currentUser.uid}/employee/${uid}`).remove()
        .then(()=>{Actions.pop()})
    }
}
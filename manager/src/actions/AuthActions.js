import firebase from 'firebase'
import {Actions} from 'react-native-router-flux'

export const changeemail = (text) =>
{
    return {
        type:'email_changed',
        payload:text
    }
}

export const changepassword = (text) =>
{
    return {
        type:'password_changed',
        payload:text
    }
}

export const  SignIn = ({email,password}) =>
{
    return (dispatch) =>
    {
        dispatch({type:'login'});
        firebase.auth().signInWithEmailAndPassword(email,password).then(
            user => loginSuccess(dispatch,user)
        ).catch(() => firebase.auth().createUserWithEmailAndPassword(email,password).then(
            user => loginSuccess(dispatch,user)
        ).catch(() => loginFail(dispatch)))
    }
}

const loginSuccess = (dispatch,user) =>
{
    dispatch({
        type:'signin_success',
        payload:user
    });
    Actions.main();
}

const loginFail = (dispatch) =>
{
    dispatch({
        type:'signin_fail'
    });
}
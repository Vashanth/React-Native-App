import { EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_SUCCESS ,LOGIN_FAIL,LOGIN} from "../actions/types";
const INIT_STATE={
    email:'',
    password:'',
    user:null,
    error:'',
    loading:false
}

export default AuthReducer = (state=INIT_STATE,action) =>
{
    console.log(action);
    switch(action.type)
    {
        case EMAIL_CHANGED:
            return {...state,email:action.payload}
        case PASSWORD_CHANGED:
            return {...state,password:action.payload}
        case LOGIN_SUCCESS:
            return {...state,user:action.payload,error:'',loading:false,email:'',password:''}
        case LOGIN_FAIL:
            return {...state,error:'Authentication Failed',loading:false,email:'',password:''}
        case LOGIN:
            return {...state,loading:true}
        default:
            return state
    }
}
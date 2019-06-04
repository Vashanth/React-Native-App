import { EMP_UPDATE, EMP_CREATE, EMP_FETCH_SUCCESS, EMP_SAVE_SUCCESS } from "../actions/types";

const INIT_STATE={
    name:'',
    phone:'',
    shift:''
}

export default EmployeeReducer = (state=INIT_STATE,action) =>
{
    switch(action.type)
    {
        case EMP_UPDATE:
            return {...state,[action.payload.props]:action.payload.value}
        case EMP_CREATE:
            return INIT_STATE;
        case  EMP_SAVE_SUCCESS:
            return INIT_STATE;
        default:
            return state;
    }
}
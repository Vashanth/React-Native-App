import { EMP_FETCH_SUCCESS } from "../actions/types";

export default EmployeeFetchReducer = (state={},action) =>
{
    switch(action.type)
    {
        case EMP_FETCH_SUCCESS:
            return action.payload
        default:
            return state;
    }
}

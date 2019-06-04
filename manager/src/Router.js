import React from 'react';
import {Router,Scene,Actions} from 'react-native-router-flux'
import LoginForm from './LoginForm'
import EmployeeList from  './EmployeeList'
import EmployeeCreate from './EmployeeCreate'
import EmployeeEdit from './EmployeeEdit'

const RouterComponent = () =>
{
    return(
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" initial/>
                </Scene>
                <Scene key="main">
                <Scene key="employeelist" rightTitle="Add" onRight={()=>Actions.employeecreate()} component={EmployeeList} title="Employees" initial/>
                <Scene key="employeecreate" title="Create" component={EmployeeCreate} />
                <Scene key="employeeedit" title="Edit Employee" component={EmployeeEdit} />
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent
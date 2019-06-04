import React, { Component } from 'react';
import {View} from 'react-native'
import {Cards,CardSection,Button} from './components/common'
import {connect} from 'react-redux'
import {EmployeeNew,EmployeeClear} from './actions'
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component
{


    componentWillMount()
    {
        this.props.EmployeeClear();
    }

    create = () =>
    {
        const {name,phone,shift} =this.props;
        this.props.EmployeeNew({name,phone,shift:shift||'1'});
    }

    render()
    {
        return(
            <View>
                <Cards>
                    <EmployeeForm {...this.props}/>
                    <CardSection>
                        <Button text="Save" onPress={this.create}/>
                    </CardSection>
                </Cards>
            </View>
        );
    }
}


const mapStateToProps = (state) =>
{
    return{
        name:state.employee.name,
        phone:state.employee.phone,
        shift:state.employee.shift
    }
}


export default  connect(mapStateToProps,{EmployeeNew,EmployeeClear})(EmployeeCreate);
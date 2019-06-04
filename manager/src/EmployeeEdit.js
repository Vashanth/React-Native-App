import React, { Component } from 'react';
import {View} from 'react-native';
import Communications from 'react-native-communications'
import {Button, CardSection,Confirm,Cards} from './components/common'
import {connect} from 'react-redux'
import EmployeeForm from './EmployeeForm'
import {EmployeeUpdate,EmployeeSave,EmployeeDelete} from './actions'

class EmployeeEdit extends Component
{

    state={showModal:false,uid:''}

    componentWillMount()
    {
        const {name,phone,shift} = this.props.employee;
        this.props.EmployeeUpdate({props:'name',value:name}); 
        this.props.EmployeeUpdate({props:'phone',value:phone}); 
        this.props.EmployeeUpdate({props:'shift',value:shift});
        let uid = Object.keys(this.props.employeelist)[this.props.index]
        this.setState({uid})
    
    }

    editEmp = () =>
    {
        const {name,phone,shift} = this.props.employees;
        let uid = Object.keys(this.props.employeelist)[this.props.index]
        this.props.EmployeeSave({name,phone,shift,uid})
    }

    textEmp = () =>
    {
        const {phone,shift} = this.props.employees
        let time;
        switch(shift)
        {
            case '1':
                time="5:00am to 10:00am"
                break
            case '2':
                time="10:00am to 2:00pm"
                break
            case '3':
                time="2:00pm to 6:00pm"
                break
            case '4':
                time="6:00pm to 10:00pm"
                break
            case '5':
                time="10:00pm to 2:00am"
                break
            case '6':
                time="2:00am to 5:00am"
        }

       Communications.textWithoutEncoding(phone,`Your shift has been changed to ${time}`)
    }

    Accept = () =>
    {
        this.props.EmployeeDelete({uid:this.state.uid})
        this.setState({showModal:false})
    }

    Decline = () =>
    {
        this.setState({showModal:false})
    }

    render()
    {
        console.log(this.state.uid)
        return(
            <Cards>
                <EmployeeForm />
                <CardSection>
                <Button text="Edit Employee" onPress={this.editEmp}/>
                </CardSection>
                <CardSection>
                <Button text="Text Employee" onPress={this.textEmp}/>
                </CardSection>
                <CardSection>
                    <Button text="Fire Employee" onPress={()=>this.setState({showModal:!this.state.showModal})}/>
                </CardSection>
                <Confirm visible={this.state.showModal} Accept={this.Accept} Decline={this.Decline} modaltext="Are you sure?" />
            </Cards>
        );  
    }
}

const mapStateToProps = (state) =>
{
    return {
        employeelist:state.employeelist,
        employees:state.employee
    }
}

export default connect(mapStateToProps,{EmployeeUpdate,EmployeeSave,EmployeeDelete})(EmployeeEdit)
import React, { Component } from 'react';
import {View,Text,Picker} from 'react-native'
import {CardSection,Input} from './components/common'
import {connect} from 'react-redux'
import {EmployeeUpdate} from './actions'

class EmployeeForm extends Component
{

    render()
    {
        return(
            <View>
                <CardSection>
                        <Input label="Name:" placeholder="Ram" value={this.props.name} onChangeText={value=>this.props.EmployeeUpdate({props:'name',value})}/>
                    </CardSection>
                    <CardSection>
                        <Input label="Phone:" placeholder="9884099110" value={this.props.phone} onChangeText={value=>this.props.EmployeeUpdate({props:'phone',value})}/>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.shiftStyle}>Shift:</Text>
                        <Picker style={{flex:1}} selectedValue={this.props.shift} onValueChange={value=>this.props.EmployeeUpdate({props:'shift',value})}>
                            <Picker.Item label="5:00am to 10:00am" value="1"/>
                            <Picker.Item label="10:00am to 2:00pm" value="2"/>
                            <Picker.Item label="2:00pm to 6:00pm" value="3"/>
                            <Picker.Item label="6:00pm to 10:00pm" value="4"/>
                            <Picker.Item label="10:00pm to 2:00am" value="5"/>
                            <Picker.Item label="2:00am to 5:00am" value="6"/>
                        </Picker>
                    </CardSection>
            </View>
        );  
    }
}

const mapStateToProps = (state) =>
{
    const  {name,phone,shift} = state.employee;
    return {name,phone,shift}
}

const styles={
    shiftStyle:{
        fontSize:18,
        paddingLeft:16,
        fontWeight:'bold',
        paddingTop:12
    }
}

export default connect(mapStateToProps,{EmployeeUpdate})(EmployeeForm)
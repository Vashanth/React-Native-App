import React,{Component} from 'react';
import {View,Text,FlatList}  from 'react-native'
import {connect} from 'react-redux'
import {EmployeeFetch} from './actions'
import ListDetail from './ListDetail'
class EmployeeList extends Component
{
    componentWillMount()
    {
        this.props.EmployeeFetch();
    }

    renderItem(data)
    {
        return (
            <ListDetail data={data}/>
        )
    }

    renderMama()
    {
    if((this.props.employeelist)!=null)
    return(    
    <FlatList data={Object.values(this.props.employeelist)} extraData={Object.keys(this.props.employeelist)} renderItem={this.renderItem.bind(this)} keyExtractor={(item,index)=>index.toString()}/>        
    )
    else
    {
        return(
            <Text>No Employees  yet</Text>
        )
    }
    }
    
    render()
    {
        let Array  = Object.values(this.props.employeelist)
        return(
            <View>
               {this.renderMama()}         
            </View>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
    employeelist:state.employeelist
    }
}

export default connect(mapStateToProps,{EmployeeFetch})(EmployeeList);

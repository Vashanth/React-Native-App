import React from 'react';
import {View,Text,TouchableWithoutFeedback} from 'react-native'
import {CardSection} from './components/common'
import { Actions } from 'react-native-router-flux';

const ListDetail = (props) =>
{

    renderRow = () =>
    {
        Actions.employeeedit({employee:props.data.item,index:props.data.index});
    }


    return(
        <TouchableWithoutFeedback onPress={this.renderRow}>
            <View>
        <CardSection>
        <Text style={{fontSize:18,paddingLeft:15}}>{props.data.index} . {props.data.item.name}</Text>
    </CardSection>
    </View>
    </TouchableWithoutFeedback>
    );
}

export default ListDetail
import React, { Component } from 'react';
import {View}  from 'react-native'

const CardSection = (props) =>  
{
    return(
        <View style={styles.cardsec}>
            {props.children}
        </View>
    );
}

const styles={
    cardsec:{
        padding:10,
        borderBottomWidth:3,
        backgroundColor:'#fff',
        position:'relative',
        justifyContent:'flex-start',
        flexDirection:'row',
        width:340,
        borderColor:'#ddd',
        elevation:2,
        alignSelf:'center',
    }
}

export {CardSection};
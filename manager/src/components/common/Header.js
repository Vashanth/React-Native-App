import React, { Component } from 'react';
import {Text,View}  from 'react-native'

const Header = (props) =>  
{
    const {textStyle,viewStyle} = styles;
    return(
        <View style={viewStyle}>
        <Text style={textStyle}>{props.title}</Text>
        </View>
    )
}
const styles ={
    viewStyle:{
        height:60,
        paddingTop:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        elevation:10,
        position:'relative'
    },
    textStyle : {
        color:'black',
        fontWeight:'bold',
        fontSize:30
    }
}

export {Header};
import React from 'react';
import {TextInput,Text,View}  from 'react-native'

const Input = ({label,value,onChangeText,placeholder,secureTextEntry}) =>  
{
const {containerStyle,labelStyle,textStyle} = styles;

    return(
        <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput secureTextEntry={secureTextEntry} style={textStyle} value={value} onChangeText={onChangeText} placeholder={placeholder}/>
        </View>
    );
}

const styles={
    containerStyle:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        height:40,
        borderWidth:1
    },
    labelStyle:{
        flex:1,
        fontSize:18,
        paddingLeft:18,
        fontWeight:'bold'
    },
    textStyle:{
        flex:2,
        fontSize:17,
        color:'#000',
        paddingRight:5,
        
    }
}

export {Input};
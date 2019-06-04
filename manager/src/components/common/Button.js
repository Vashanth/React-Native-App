import React from 'react';
import {Text,TouchableOpacity}  from 'react-native'

const Button = ({text,onPress}) =>  
{
    return(
        <TouchableOpacity style={styles.buttStyle} onPress={onPress}>
        <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles={
    textStyle:{
        alignSelf:'center',
        color:'black',
        fontSize:18,
        fontWeight:'bold',
        paddingTop:5,
        paddingBottom:5
    },
    buttStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:5,
        marginLeft:5,
        marginRight:5,
        elevation:2,
        backgroundColor:'#d6d6c2'
    }

}

export {Button};
import React, { Component } from 'react';
import {View}  from 'react-native'

const Cards = (props) =>  
{
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

const styles = {
    containerStyle : {
       padding:5,
       elevation:2,
       borderWidth:1,
       borderRadius:2,
       borderColor:'black',
       marginLeft:5,
       marginRight:5,
       marginTop:10,
    }
}

export {Cards};

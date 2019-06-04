import React from 'react';
import {View,ActivityIndicator}  from 'react-native'

const Spinner = ({size}) =>  
{
    return(
     <View style={styles.spinStyle}> 
         <ActivityIndicator size={size || "large"}/>
     </View>
    );
}

const styles={
    spinStyle:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'
    }
}

export {Spinner};
import React, { Component } from 'react';
import {View,Modal,Text} from 'react-native'
import {Button}  from './Button'
import {CardSection} from './CardSection'

const Confirm = ({modaltext,visible,Accept,Decline}) =>
{
    return(
        <Modal visible={visible} transparent animationType="slide" onRequestClose={()=>{}}>
            <View style={styles.containerStyle}>
                <CardSection style={styles.cardSectionStyle}>
                    <Text style={styles.textStyle}>{modaltext}</Text>
                </CardSection>
                <CardSection>
                    <Button text="Yes" onPress={Accept}/>
                </CardSection>
                <CardSection>
                    <Button text="No" onPress={Decline} />
                </CardSection>
            </View>
        </Modal>
    );
}

const styles={
    cardSectionStyle:{
        justifyContent:'center'
    },
    textStyle:
    {
        flex:1,
        fontSize:18,
        textAlign:'center',
        lineHeight:40
    },
    containerStyle:{
        backgroundColor:'rgba(0,0,0,0.75)',
        flex:1,
        justifyContent:'center',
        position:'relative'
    }

}

export {Confirm}
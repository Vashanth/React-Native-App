import React, { Component } from 'react';
import {Input,Cards,CardSection,Button,Spinner} from './components/common'
import {View,Text}  from 'react-native'

import {connect} from 'react-redux'
import {changeemail,changepassword,SignIn} from './actions'

class LoginForm extends Component
{

    emailChanged = (text) =>
    {
        this.props.changeemail(text);
    }

    passwordChanged = (text) =>
    {
        this.props.changepassword(text);
    }

    signIn = () =>
    {
        const {email,password} = this.props;
        this.props.SignIn({email,password});
    }

    isError = () =>
    {
        if(this.props.error)
        return <View><Text style={styles.textStyle}>{this.props.error}</Text></View>
    }

    renderButton = () =>
    {
        if(this.props.loading)
        return <Spinner size="small"/>
        else
        return (
            <Button text="Log In" onPress={this.signIn}/>
        )

    }

    render()
    {
        return(
            <Cards>
                <CardSection>
                    <Input placeholder="user@email.com" label="E-mail:" onChangeText={this.emailChanged} value={this.props.email}/>
                </CardSection>
                <CardSection>
                    <Input placeholder="enter password" secureTextEntry label="Password:" value={this.props.password} onChangeText={this.passwordChanged}/>
                </CardSection>
                {this.isError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
               
            </Cards>
        );
    }

}

const mapStateToProps = (state) =>
{
    return {
        email:state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading
    }
}

const styles={
    textStyle:
    {
        alignSelf:'center',
        color:'red',
        fontSize:20
    }
}

export default connect(mapStateToProps,{changeemail,changepassword,SignIn})(LoginForm);
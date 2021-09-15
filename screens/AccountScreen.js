import React from 'react';
import {View,Text} from 'react-native';
import MyHeader from "../components/MyHeader";

export default class AccountScreen extends React.Component{
    render(){
        return(
            <View>
                <MyHeader title="My Account" navigation={this.props.navigation} />
                <Text>My Account</Text>
            </View>
        )

    }
}
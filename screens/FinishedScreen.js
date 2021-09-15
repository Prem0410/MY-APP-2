import React from 'react';
import {View,Text} from 'react-native';
import MyHeader from "../components/MyHeader";

export default class FinishedScreen extends React.Component{
    render(){
        return(
            <View>
                <MyHeader title="Order History" navigation={this.props.navigation} />
                <Text>Finished Orders</Text>
            </View>
        )

    }
}
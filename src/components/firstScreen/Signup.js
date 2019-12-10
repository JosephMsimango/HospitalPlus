import React,{Component} from "react";
import {Image,TouchableOpacity,Dimensions,TextInput,KeyboardAvoidingView,Text,StatusBar,Platform,StyleSheet,View} from "react-native";

export default class Signup extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            checked:false,
        }
    }
    //<CheckBox uncheckedColor="#ffffff" value={this.state.checked} onValueChange={() => this.setState({ checked: !this.state.checked })}/>
    
    render(){
        return(
            <View >
                <Text>Sign Up</Text>
            </View>
        )
    }
}
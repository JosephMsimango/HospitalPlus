import React,{Component} from "react";
import {Image,Dimensions,Text,StatusBar,Platform,StyleSheet,View} from "react-native";

export default class Logo extends Component{
    render(){
        return(
            <View style={styles.container}> 
                <Image style={{width:250,height: 80,marginTop:20}} source ={require("../../../images/HospitalPlus.png")}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{ 
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: 'center',
    },

});

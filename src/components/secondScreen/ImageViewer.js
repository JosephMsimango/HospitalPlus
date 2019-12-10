import React,{Component} from "react";
import {withNavigation} from "react-navigation";
import {Image,TouchableOpacity,Dimensions,TextInput,KeyboardAvoidingView,Text,StatusBar,Platform,StyleSheet,View} from "react-native";

class Profile extends React.Component{
    
    render(){
       return(
                <View style={{flex:1,backgroundColor:"black"}} >
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require("../../../images/ProfilePic.png")} />
                    </View>
                </View>
    
    )}
}
export default withNavigation(Profile);
const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: 'stretch',

      },
      image: {
        flex: 1,
        width:"100%"
      }
    });
     
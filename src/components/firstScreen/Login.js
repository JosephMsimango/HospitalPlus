import React,{Component} from "react";
import {Image,TouchableOpacity,Dimensions,TextInput,KeyboardAvoidingView,Text,StatusBar,Platform,StyleSheet,View} from "react-native";
import Modal, { ModalFooter,ModalTitle, ModalButton, ModalContent } from 'react-native-modals';
import { CheckBox } from 'react-native-elements'
import Logo from "../support/Logo";
import {connect} from "react-redux";
import {setEmail,setPassword,setCheck} from "../../actions/LoginActions";

class Login extends Component{
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
        console.log(this.props)
        return(
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={Platform.select({ios: () => 0,android: () => 10})()}>
                    <Image style={{width:100,height: 100,alignSelf:"center",marginBottom:20}} source ={require("../../../images/user.png")}/>
                    <Text style={{color:"#ffffff",fontSize:15,textAlign:"center"}}>Staff Login </Text>
                    <View style={[styles.textInput,{marginTop:20,}]}>
                        <Image style={styles.icon} source ={require("../../../images/user1.png")}/>
                        <TextInput style={styles.field} placeholder = "Email" placeholderTextColor = "#D3D3D3" onChangeText={(email) =>this.props.setEmail(email)} value={this.props.email}/>
                    </View>
                    <View style={[styles.textInput,{marginTop:10}]}>
                        <Image style={styles.icon} source ={require("../../../images/lock.png")}/>
                        <TextInput style={styles.field} placeholder = "Password" secureTextEntry={true} placeholderTextColor = "#D3D3D3" onChangeText={(password) => this.props.setPassword(password)} value={this.props.password}/>
                    </View>
                </KeyboardAvoidingView>
                <View style={{alignItems:"center"}}>
                    <View style={{justifyContent:"space-between",width:"80%",flexDirection: "row",alignItems:"center"}}>
                        <View style={{ flexDirection: "row"}}>
                        <CheckBox title="Remember me?" textStyle={{color:"#ffffff",fontWeight: "normal"}} containerStyle={{marginLeft:0,backgroundColor:"#2C7A9A",borderColor:"#2C7A9A"}} uncheckedColor="#ffffff" checkedColor='#64DF0E' checked={this.props.checked} onPress={(checked)=>this.props.setCheck(!this.props.checked)}/>
                        </View>
                        <TouchableOpacity>
                            <Text style={{color:"#ffffff"}} >Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("SecondScreen")}}>
                <View style={styles.login}>
                        <Text style={{flex:1,fontSize:25,color:"#ffffff",textAlign:"center",textAlignVertical:"center"}}>Login</Text>
                </View>
                </TouchableOpacity>
               
                <View style = {styles.signupTextCont}>            
                            <Text style={{color:"#ffffff"}}>
                                Don't have an account? Click 
                            </Text>

                            <TouchableOpacity style={{paddingRight:2}}>
                                <Text style = {styles.signUpButton}>
                                    {" "}Here
                                </Text>
                            </TouchableOpacity>
                             <Text style={{color:"#ffffff"}}>!</Text>
                </View>
                <Modal
                        visible={this.state.showAlert}
                        footer={
                          <ModalFooter>
                            <ModalButton
                              text="Okay"
                              onPress={() => {
                                this.setState({
                                  showAlert:false
                                })
                              }}
                            />
                          </ModalFooter>
                        }>
              <ModalContent>
                      <Text>{this.state.message}</Text>
              </ModalContent>
            </Modal>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{ 
        backgroundColor:"#2C7A9A",
        height:"100%",
        width:"100%",
        justifyContent:"center"
    },
    signUpButton:{
        color: "#5FCAF3",
        fontSize:16,
        fontWeight: "500"   
      },
    signupTextCont: {

        height: 50,
        backgroundColor: "#2C7A9A",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingVertical: 16,
        position: "absolute",
        bottom: 0,
        width:"100%",
        

      },
    textInput:{
        flexDirection:"row",
        borderColor:"#ffffff"
        ,borderWidth:1,
        width:"80%",
        alignSelf:"center",
        borderRadius:5,
        height:50,
        backgroundColor:"#ffffff", 
    },
    login:{
        borderColor:"#F96800"
        ,borderWidth:1,
        width:"80%",
        alignSelf:"center",
        borderRadius:5,
        height:50,
        backgroundColor:"#F96800",
    },
    field:{
        width:"80%",
        fontSize:20,
        textAlign:"center",
        paddingRight:30,
        color:"#6C6A6A"
    },
    icon:{
        width:20,
        height: 20,
        alignSelf:"center",
        marginLeft:10,
        marginRight:10
    }

});

function mapStateToProps(state){
    return{
        email: state.email,
        password: state.password,
        checked: state.checked
    }
}
export default connect(mapStateToProps,{setEmail,setPassword,setCheck})(Login)
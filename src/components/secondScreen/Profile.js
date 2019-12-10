import React,{Component} from "react";
import {Text,Image,StatusBar,Platform,StyleSheet,TextInput,Button,View,TouchableOpacity} from "react-native";
import {createStackNavigator,withNavigation,StackNavigator} from "react-navigation";
import {FontAwesome5} from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Firstname: "",
            Lastname: "",
            Email: "",
            image: require("../../../images/no-profile-picture-icon-13.jpg")// "https://icon-library.net/images/no-profile-picture-icon/no-profile-picture-icon-13.jpg",
        }
      
    } 
    
    componentDidMount() {
      this.getPermissionAsync();
    }
  
    getPermissionAsync = async () => {
      if (true) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    }
  
    _pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Image,
        allowsEditing: true,
        aspect: [4, 3],
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.setState({image: {uri: result.uri}});
      }
    };
   
    render(){
      let { image } = this.state;
       return(
        <View style = {styles.container}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ImageView")}}>
          {image && <Image style={styles.avatar} source={this.state.image} />}
        </TouchableOpacity>

        <View style={{backgroundColor:"#2C7A9A",borderColor:"#ffffff",borderWidth:1,height:50,width:50,justifyContent:"center",alignItems:"center",borderRadius:150,marginTop:130,position:"absolute",marginLeft:230,}}>
            <TouchableOpacity onPress={this._pickImage}>
              <FontAwesome5 name="camera" size={30}  color={"#ffffff"}/>
            </TouchableOpacity>
        </View>
  
        <TouchableOpacity>
          <View style={{flexDirection:"row",marginBottom:10}}>
            <View style={{paddingLeft:20,paddingRight:20,alignSelf:"center"}}> 
                <FontAwesome5 name="user" solid={true} size={20}  color={"#2C7A9A"}/>
            </View>
            <View style={{flex:1,borderBottomWidth:1,borderBottomColor:"grey"}}>
                <Text style={{color:"grey"}}>Name</Text>
                <Text style={{fontSize:20}}>Dr. J Msimango</Text>
                <Text>Joseph Msimango</Text>
            </View>
            <View style={{paddingRight:20,paddingLeft:20,justifyContent:"center",height:60}}> 
                <FontAwesome5 name="pen" solid={true} size={20}  color={"grey"}/>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection:"row"}}>
            <View style={{paddingLeft:20,paddingRight:20,alignSelf:"center"}}> 
                <FontAwesome5 name="info-circle" solid={false} size={20}  color={"#2C7A9A"}/>
            </View>
            <View style={{flex:1,borderBottomWidth:1,borderBottomColor:"grey"}}>
                <Text style={{color:"grey"}}>Bio</Text>
                
            </View>
            <View style={{paddingRight:20,paddingLeft:20,justifyContent:"center",height:60}}> 
                <FontAwesome5 name="pen" solid={true} size={20}  color={"grey"}/>
            </View>
          </View>
        </TouchableOpacity>
    </View>
        );
    }
}

 
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        flex: 1,
      },
      header:{
        backgroundColor: "#00BFFF",
        height:200,
      },
      buttonText:{
        fontSize:16,
        color: "#ffffff",
        
    },
    showImage:{
      backgroundColor: "black",
    }
    ,
    button:{
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    borderWidth:4,
    borderColor:"#ffffff",
    backgroundColor: "#00BFFF",
    },
      body:{
        marginTop:150,
        flex:1,
        alignItems:"center",
        padding:30,
      },
      firstname:{
          fontSize:50,
          color:"#FFFFFF",
          fontWeight:"600"
      },
      lastname:{
        color:"#FFFFFF",
      },
      email:{
          color:"#00BFFF",
      }
      ,
      avatar: {
        width: 180,
        height: 180,
        borderRadius: 150,
        marginBottom:10,
        alignSelf:'center',
        marginTop:10,
      },
    });
     
export default withNavigation(Profile)
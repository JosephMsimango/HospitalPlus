import React,{Component} from "react";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import{createStackNavigator,HeaderBackButton} from "react-navigation-stack";
import {FontAwesome5} from "@expo/vector-icons"
import {AppointmentsScreen,ImageViewerScreen,AnnouncementsScreen,ChatsScreen,ProfileScreen} from "../secondScreen";



const Appointments = createStackNavigator({
    Appointments:{
      screen:AppointmentsScreen,
      navigationOptions:{
        headerTitle: "Appointments",
        headerStyle: {
            backgroundColor: '#2C7A9A',
          },
          headerTitleStyle: { 
            color:"#ffffff"
          }
        /*headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },*/
      }
    }
})

const Announcements = createStackNavigator({
    Announcements:{
        screen:AnnouncementsScreen,
        navigationOptions:{
          headerTitle: "Announcements",
          headerStyle: {
            backgroundColor: '#2C7A9A',
          },
          headerTitleStyle: { 
            color:"#ffffff"
          }
          /*headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },*/
        }
      }
})

const Chats = createStackNavigator({
    Chats:{
        screen:ChatsScreen,
        navigationOptions:{
          headerTitle: "Chats",
          headerStyle: {
            backgroundColor: '#2C7A9A',
          },
          headerTitleStyle: { 
            color:"#ffffff"
          }
          /*headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        }*/
     }
    }
})




const Profile = createStackNavigator({
    Profile:{
        screen:ProfileScreen,
        navigationOptions:({ navigation }) => {
            return {
              headerLeft: (<HeaderBackButton tintColor={"#ffffff"}  onPress={_ => navigation.navigate("Appointments")}/>),
              headerTitle: "Profile",
              headerStyle: {
                backgroundColor: '#2C7A9A',
              },
              headerTitleStyle: { 
              color:"#ffffff"
            }
          }
        }
      },
    ImageView:{
        screen:ImageViewerScreen,
        navigationOptions:({ navigation }) => {
            return {
              headerLeft: (<HeaderBackButton tintColor={"#ffffff"}  onPress={_ => navigation.navigate("Profile")}/>),
              headerTitle: "Profile Picture",
              headerStyle: {
                backgroundColor: '#2C7A9A',
              },
              headerTitleStyle: { 
              color:"#ffffff"
            }
          }
        }
      },
})

const TabNavigator = createBottomTabNavigator(
    {
        Appointments:{
            screen: Appointments,
            navigationOptions:{
                tabBarLabel:'Appointments',
                tabBarIcon:({tintColor})=><FontAwesome5 name="calendar-check" size={24} color={tintColor}/>,
               
            }
        },
        Announcements:{
            screen:Announcements,
            navigationOptions:{
                tabBarLabel:'Announcements',
                tabBarIcon:({tintColor})=><FontAwesome5 name="bullhorn" size={24} color={tintColor}/>
            }
        },
        Chats:{
            screen: Chats,
            tabBarLabel:'Chats',
            navigationOptions:{
                tabBarIcon:({tintColor})=><FontAwesome5 name="comment" size={24} color={tintColor}/>
            }
        },
        Profile1:{
            screen: Profile,
            tabBarLabel:'Profile',
            navigationOptions:{
                tabBarIcon:({tintColor})=><FontAwesome5 name="user" size={24} color={tintColor}/>
            }
        }
    },
    {
        
    tabBarOptions:{
        showLabel:false,
       /* style: {

            backgroundColor: '#8e7e7e'
           }*/
    }
})

/*Home:{  
    screen:Home,  
    navigationOptions:{  
      tabBarLabel:'Home',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="ios-home" color={tintColor} size={25}/>  
      )  
    }  
  },*/

export default createAppContainer(TabNavigator)
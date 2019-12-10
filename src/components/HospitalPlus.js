import React,{Component} from "react";
import{createStackNavigator} from "react-navigation-stack";
import {createAppContainer,createSwitchNavigator} from "react-navigation";
import Login from "./firstScreen/Login";
import Signup from "./firstScreen/Signup";
import HospitalApp from "./secondScreen/HospitalApp";
import { ProfileScreen,ImageViewerScreen } from "./secondScreen";
const StartStack = createStackNavigator(
    {login:
        {
          screen:Login,
          navigationOptions:{
            header:null
          }
        }, 
    signup:
        {
          screen:Signup,
          navigationOptions:{
            header:null
          }
        }
      })
const AppStack = createStackNavigator(
    {
      HospitalApp:{
        screen:HospitalApp,
        navigationOptions:{
          header:null
        }
      }
    })
const Root =  createSwitchNavigator(
  {
      firstScreen: StartStack,
      SecondScreen: AppStack,
  },
  {
    initialRouteName: "firstScreen",
  }
);
const App = createAppContainer(Root);
export default App;

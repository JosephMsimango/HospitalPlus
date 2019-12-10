import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import HospitalPlus from './src/components/HospitalPlus';
import reducer from "./src/reducers/LoginReducer";
import {createStore} from "redux"

const store = createStore(reducer)
export default function App() {
  return (
      <Provider store={store}>
         <HospitalPlus/>
      </Provider>
   
  );
}

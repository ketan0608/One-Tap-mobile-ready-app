import React, {Component} from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Pharmeasy from './Medicines/Pharmeasy'
import Drawernavigator from './naviagtor/DrawerNavigator'
export default class App extends Component{
  render(){
  return(
  <AppContainer/>
  )
}
}
var AppSwitchNavigator = createSwitchNavigator({
Drawernavigator:Drawernavigator
});

const AppContainer  = createAppContainer(AppSwitchNavigator);
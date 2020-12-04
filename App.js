import React from "react";
import { StyleSheet, Text, View ,Image} from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator,createSwitchNavigator } from "react-navigation-tabs";
import WriteStoryScreen from "./screens/WriteStoryScreen";
import ReadStoryScreen from "./screens/ReadStoryScreen";

export default class App extends React.Component {
  render() {
    return(
      <View>
      <AppContainer />;
      </View>
      );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStoryScreen: { screen: WriteStoryScreen },
  ReadStoryScreen: { screen: ReadStoryScreen },
});

var AppNavigator =createSwitchNavigator({
  LogInScreen:LoginScreen
})

const AppContainer = createAppContainer(TabNavigator);
const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});

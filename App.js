import React from "react";
import { Platform, SafeAreaView, StatusBar, View } from "react-native";

import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation-tabs";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Decks from "./components/Decks";
import AddDeck from "./components/AddDeck";

const tabSettings = {
  tabRouteConfigs: {
    Decks: {
      screen: Decks
    },
    AddDeck: {
      screen: AddDeck
    }
  },
  tabNavigationOptions: {
    navigationOptions: { header: null },
    tabBarOptions: {}
  }
};

const MainNavigator = createStackNavigator({
  Home: {
    screen:
      Platform.OS === "ios"
        ? createBottomTabNavigator(
            tabSettings.tabRouteConfigs,
            tabSettings.tabNavigationOptions
          )
        : createMaterialTopTabNavigator(
            tabSettings.tabRouteConfigs,
            tabSettings.tabNavigationOptions
          )
  }
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
          <AppContainer />
        </View>
      </SafeAreaView>
    );
  }
}

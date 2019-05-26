import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { Constants } from "expo";

import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation-tabs";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Decks from "./components/Decks";
import Deck from "./components/Deck";
import AddDeck from "./components/AddDeck";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";

const tabNavigatorSettings = {
  routeConfigs: {
    Decks: {
      screen: Decks
    },
    AddDeck: {
      screen: AddDeck
    }
  },
  navigationOptions: {
    navigationOptions: { header: null },
    tabBarOptions: {}
  }
};

const stackNavigatorSettings = {
  navigationOptions: {}
};

const MainNavigator = createStackNavigator({
  Home: {
    screen:
      Platform.OS === "ios"
        ? createBottomTabNavigator(
            tabNavigatorSettings.routeConfigs,
            tabNavigatorSettings.navigationOptions
          )
        : createMaterialTopTabNavigator(
            tabNavigatorSettings.routeConfigs,
            tabNavigatorSettings.navigationOptions
          )
  },
  Deck: {
    screen: Deck,
    navigationOptions: stackNavigatorSettings.navigationOptions
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: stackNavigatorSettings.navigationOptions
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: stackNavigatorSettings.navigationOptions
  }
});

const AppContainer = createAppContainer(MainNavigator);

function FlashcardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlashcardsStatusBar backgroundColor="gray" barStyle="light-content" />
        <AppContainer />
      </View>
    );
  }
}

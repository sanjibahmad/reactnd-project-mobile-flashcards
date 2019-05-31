import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Platform, StatusBar, View } from "react-native";
import { Constants } from "expo";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation-tabs";
import {
  createAppContainer,
  createStackNavigator,
  HeaderBackButton
} from "react-navigation";
import { clearLocalNotification, setLocalNotification } from "./utils/helper";

import reducer from "./reducers";
import Decks from "./components/Decks";
import Deck from "./components/Deck";
import AddDeck from "./components/AddDeck";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";

const store = createStore(reducer);

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
    navigationOptions: ({ navigation, screenProps }) => ({
      ...stackNavigatorSettings.navigationOptions,
      title: "Deck",
      headerLeft: (
        <HeaderBackButton
          onPress={() => {
            navigation.navigate("Decks");
          }}
        />
      )
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      ...stackNavigatorSettings.navigationOptions,
      title: "Add Card"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      ...stackNavigatorSettings.navigationOptions,
      title: "Quiz"
    }
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
  async componentDidMount() {
    // await clearLocalNotification();
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <FlashcardsStatusBar
            backgroundColor="gray"
            barStyle="light-content"
          />
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

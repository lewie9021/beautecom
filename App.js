import { Platform, StatusBar, Image, TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import React from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import ListerScreen from "./ListerScreen";
import ProductScreen from "./ProductScreen";

const HomeStack = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
          title: 'Home',
          headerLeft: (
              <Icon
                  containerStyle={{marginLeft: 8}}
                  name="menu"
                  size={35}
                  onPress={() => navigation.navigate('DrawerOpen')}
              />
          )
        })
    }
});

const ListerStack = StackNavigator({
    Lister: {
        screen: ListerScreen,
        navigationOptions: ({navigation}) => ({
          title: 'Lister',
          headerLeft: (
              <Icon
                  containerStyle={{marginLeft: 8}}
                  name="menu"
                  size={35}
                  onPress={() => navigation.navigate('DrawerOpen')}
              />
          )
        })
    }
});


const Root = DrawerNavigator({
  Home: {
      screen: HomeStack
  },
  Lister: {
      screen: ListerStack
  }
});

const opts = {
    headerMode: "none",
    cardStyle: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
};

const SimpleApp = StackNavigator({
   Home: {screen: Root, navigationOptions: {title: null}}
}, opts);


export default SimpleApp;

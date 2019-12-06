import React from "react";
import { createAppContainer } from "react-navigation";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "react-navigation-tabs";

import RestaurantStacks from "./Stacks/RestaurantsStacks";
import SearchStacks from "./Stacks/Search";
import RankingStacks from "./Stacks/Ranking";
import FavoritesStacks from "./Stacks/Favorites";
import AcountStacks from "./Stacks/Acount";

const NavigationTabs = createBottomTabNavigator({
  
  Restaurants: {
    screen: RestaurantStacks,
    navigationOptions: {
      tabBarLabel: "Restaurantes",
      tabBarIcon: ({tintColor}) => (
        <Icon name='food-variant' type='material-community' color={tintColor} size={23} />
      )
    }
  },
  Search: {
    screen: SearchStacks,
    navigationOptions: {
      tabBarLabel: "Buscar",
      tabBarIcon: ({tintColor}) => (
        <Icon name='magnify' type='material-community' color={tintColor} size={23} />
      )
    }
  },
  Favorites: {
    screen: FavoritesStacks,
    navigationOptions: {
      tabBarLabel: "Favoritos",
      tabBarIcon: ({tintColor}) => (
        <Icon name='heart' type='material-community' color={tintColor} size={23} />
      )
    }
  },
  Ranking: {
    screen: RankingStacks,
    navigationOptions: {
      tabBarLabel: "Ranking",
      tabBarIcon: ({tintColor}) => (
        <Icon name='star-circle' type='material-community' color={tintColor} size={23} />
      )
    }
  },
  Account: {
    screen: AcountStacks,
    navigationOptions: {
      tabBarLabel: "Mi Cuenta",
      tabBarIcon: ({tintColor}) => (
        <Icon name='account' type='material-community' color={tintColor} size={23} />
      )
    }
  }
},
{
  initialRouteName:"Account",
  tabBarOptions:{
    inactiveTintColor:"#646464",
    activeTintColor:"#00a680",
  }
}
);
export default createAppContainer(NavigationTabs);

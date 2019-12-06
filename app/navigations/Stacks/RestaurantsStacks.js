import {createStackNavigator}  from 'react-navigation-stack';
import SRestaurants from '../../screens/SRestaurants'


const RestaurantStacks=createStackNavigator({
    Restaurants:{
        screen:SRestaurants,
        navigationOptions:()=>({
            title:"Restaurantes",          
        })
    }
    
});

export default RestaurantStacks;
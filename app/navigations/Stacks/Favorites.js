import {createStackNavigator}  from 'react-navigation-stack';
import SFavorites from '../../screens/SFavorites'


const FavoritesStacks=createStackNavigator({
    Favorites:{
        screen:SFavorites,
        navigationOptions:({
            title:"Favoritos",
        
        })
    }
});

export default FavoritesStacks;
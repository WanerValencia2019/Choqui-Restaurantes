import {createStackNavigator}  from 'react-navigation-stack';
import SSearch from '../../screens/SSearch'


const SearchStacks=createStackNavigator({
    Search:{
        screen:SSearch,
        navigationOptions:({
            title:"Buscar Restaurante",
        
        })
    }
});

export default SearchStacks;
import {createStackNavigator}  from 'react-navigation-stack';
import SRanking from '../../screens/SRanking'


const RankingStacks=createStackNavigator({
    Ranking:{
        screen:SRanking,
        navigationOptions:({
            title:"Mejor Valorados",
        
        })
    }
});

export default RankingStacks;
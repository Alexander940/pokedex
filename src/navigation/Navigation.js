import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import FavoriteNavigation from './FavoriteNavigation'
import FavoriteScreen from '../screens/Favorite'
import PokedexNavigation from './PokedexNavigation'
import AccountScreen from '../screens/Account'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({ color, size }) => (
                <Icon name="heart" size={size} color={color} />
            ),
            headerTitle: 'Favoritos'
        }}/>
        <Tab.Screen name="Pokedex" component={PokedexNavigation} options={{
            tabBarLabel: '',
            tabBarIcon: () => renderPokeball(),
            headerTitle: '',
            headerTransparent: true
        }}/>
        <Tab.Screen name="Account" component={AccountScreen} options={{
            tabBarLabel: 'Mi cuenta',
            tabBarIcon: ({ color, size }) => (
                <Icon name="user" size={size} color={color} />
            ),
            headerTitle: 'Mi cuenta'
        }}/>
    </Tab.Navigator>
  )
}

function renderPokeball() {
    return(
        <Image 
            source={require('../assets/pokeball.png')}
            style={{
                width: 75,
                height: 75,
                top: -15
            }}
        />
    )
}
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from '../screens/HomeScreen';
import { Options } from '../constants/Constants';
import { 
  UseState, 
  UseEffect,
  UseEffect2,
  Memo,
  Memo2,
  UseMemo,
  UseCallback,
  useContext,
  UseDouble,
} from '../screens/categories/Categories';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen} options={Options.home}/>
        <Stack.Screen name='useState' component={UseState} options={Options.useState}/>
        <Stack.Screen name='useEffect' component={UseEffect} options={Options.useEffect}/>
        <Stack.Screen name='useEffect2' component={UseEffect2} options={Options.useEffect2}/>
        <Stack.Screen name='memo' component={Memo} options={Options.memo}/>
        <Stack.Screen name='memo2' component={Memo2} options={Options.memo2}/>
        <Stack.Screen name='useMemo' component={UseMemo} options={Options.useMemo}/>
        <Stack.Screen name='useCallback' component={UseCallback} options={Options.useCallback}/>
        <Stack.Screen name='useContext' component={useContext} options={Options.useContext}/>
        <Stack.Screen name='useDouble' component={UseDouble} options={Options.useDouble}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
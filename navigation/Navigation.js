import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from '../screens/HomeScreen';
import { Options } from '../constants/Constants';
import { 
  useState, 
  useEffect,
  useEffect2,
  Memo,
  Memo2,
  useMemo,
  useCallback,
  useDouble,
} from '../screens/categories/Categories';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen} options={Options.home}/>
        <Stack.Screen name='useState' component={useState} options={Options.useState}/>
        <Stack.Screen name='useEffect' component={useEffect} options={Options.useEffect}/>
        <Stack.Screen name='useEffect2' component={useEffect2} options={Options.useEffect2}/>
        <Stack.Screen name='memo' component={Memo} options={Options.memo}/>
        <Stack.Screen name='memo2' component={Memo2} options={Options.memo2}/>
        <Stack.Screen name='useMemo' component={useMemo} options={Options.useMemo}/>
        <Stack.Screen name='useCallback' component={useCallback} options={Options.useCallback}/>
        <Stack.Screen name='useDouble' component={useDouble} options={Options.useDouble}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
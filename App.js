import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <Navigation />
  );
}

AppRegistry.registerComponent(appName, () => App);
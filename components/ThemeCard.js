import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from './Button';
import { useTheme, useThemeUpdate } from '../functions/Functions';

const Card = ( props ) => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <View style={styles.container}>
      <Text style={styles.value}>Current Theme: {`${darkTheme ? 'Dark Theme' : 'Light Theme'}`}</Text>
      <Button content='Toggle Theme' onPress={toggleTheme}/>
      <View style={darkTheme ? styles.darkTheme : styles.lightTheme}>  
        <Title darkTheme={darkTheme}/>
      </View>
    </View>
  )
}

const Title = ({ darkTheme }) => {
  return (
    <Text style={darkTheme ? styles.dark : styles.light}>
      {darkTheme ? 'Dark Theme' : 'Light Theme'}</Text>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 20,
  },
  darkTheme:{    
    padding: 20,
    borderRadius: 15,
    backgroundColor:'black',
  },
  lightTheme:{
    padding: 20,
    borderRadius: 15,
    backgroundColor:'white',
  },
  dark:{
    color:'white',
    fontSize: 18,
  },
  light:{
    color:'black',
    fontSize: 18,
  }
});

export default Card;
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Board, Button } from '../../components/Components';
import showMessage from '../../functions/Toast';

const Screen = ( props ) => {
  const [ value, setValue ] = useState(0);

  const { params } = props.route;
  const { title, description } = params;

  // this doesn't work
  // const addValue = () => setValue(value +1);

  // this works (updater way)
  const addValue = () => setValue((preValue) => preValue + 1);
  const increment = useCallback(addValue, []);
  
  return (
    <View style={styles.container}>
      <Board title={title} description={description}/>
      <Text style={styles.value}>{`Current Value: ${value}`}</Text>
      <View style={styles.buttonContainer}>
        <Button content='+' onPress={increment}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    paddingTop: 20,
  },
  buttonContainer:{
    justifyContent:'space-between',
    flexDirection: 'row',
  },
  value:{
    marginHorizontal:20,
    fontSize: 18,    
  }
});

export default Screen;
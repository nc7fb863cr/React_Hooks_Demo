import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Board, Button } from '../../components/Components';
import showMessage from '../../functions/Toast';

const Screen = ( props ) => {
  const [ value, setValue ] = useState(0);
  const [ value2, setValue2 ] = useState(0);

  const { params } = props.route;
  const { title, description } = params;

  const addValue = () => setValue(value +1);
  const deductValue = () => setValue(value -1);
  
  const addValue2 = () => setValue2(value2 +1);
  const deductValue2 = () => setValue2(value2 -1);

  useEffect(() => {
    console.log('"useEffect" has been mounted!');
    showMessage('"useEffect" has been mounted!');

    return () => {
      console.log('"useEffect" is unmounted!');
      showMessage('"useEffect" is unmounted!');
    }
  }, [ ])
  
  return (
    <View style={styles.container}>
      <Board title={title} description={description}/>
      <Text style={styles.value}>{`(Value 1) Current Value: ${value}`}</Text>      
      <View style={styles.buttonContainer}>
        <Button content='-' onPress={deductValue}/>
        <Button content='+' onPress={addValue}/>
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
    fontSize: 20,    
  }
});

export default Screen;
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
    console.log('"useEffect" has been either mounted or updated');
    showMessage('"useEffect" has been either mounted or updated');

    return () => {
      console.log('"useEffect" is either unmounted or updated!');
      showMessage('"useEffect" is either unmounted or updated!');
    }
  }, [ value ])
  
  return (
    <View style={styles.container}>
      <Board title={title} description={description}/>
      <Text style={styles.value}>{`(Value 1) Current Value: ${value}`}</Text>
      <View style={styles.buttonContainer}>
        <Button content='-' onPress={deductValue}/>
        <Button content='+' onPress={addValue}/>
      </View>

      <Text style={styles.value}>{`(Value 2) Current Value: ${value2}`}</Text>
      <View style={styles.buttonContainer}>
        <Button content='-' onPress={deductValue2}/>
        <Button content='+' onPress={addValue2}/>
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
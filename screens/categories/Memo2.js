import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Board, Button, MemoCard2 } from '../../components/Components';

const Screen = ( props ) => {
  const [ value, setValue ] = useState(0);
  const { params } = props.route;
  const { title, description } = params;

  const addValue = () => setValue(value +1);
  const deductValue = () => setValue(value -1);
    
  return (
    <View style={styles.container}>
      <Board title={title} description={description}/>
      <MemoCard2 count={value}/>
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
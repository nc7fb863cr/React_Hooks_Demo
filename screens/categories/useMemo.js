import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useMemo } from 'react/cjs/react.development';

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

  const value2Title = useMemo(() => {
    showMessage('Value2 has been updated!');
    return `(With useMemo) Current Value: ${value2}`;
  }, [ value2 ]);
  
  return (
    <View style={styles.container}>
      <Board title={title} description={description}/>
      <Title count={value}/>
      <View style={styles.buttonContainer}>
        <Button content='-' onPress={deductValue}/>
        <Button content='+' onPress={addValue}/>
      </View>

      <Text style={styles.value}>{value2Title}</Text>
      <View style={styles.buttonContainer}>
        <Button content='-' onPress={deductValue2}/>
        <Button content='+' onPress={addValue2}/>
      </View>
    </View>
  )
}

const Title = ({ count }) => {
  console.log('"Value 1" updated');
  showMessage('Value1 has either been re-rendered or updated!');
  return <Text style={styles.value}>{`Current Value: ${count}`}</Text>
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
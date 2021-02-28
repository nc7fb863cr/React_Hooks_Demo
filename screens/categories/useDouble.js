import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Board, Button } from '../../components/Components';
import { showMessage, useDouble } from '../../functions/Functions';

const Screen = ( props ) => {
  const { value, double } = useDouble( 1, () => {
    console.log('value has been doubled!');
    showMessage('value has been doubled!');
  });
  const { params } = props.route;
  const { title, description } = params;
    
  return (
    <View style={styles.container}>
      <Board title={title} description={description}/>
      <Text style={styles.value}>{`Current Value: ${value}`}</Text>
      <View style={styles.buttonContainer}>
        <Button content='+' onPress={double}/>
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
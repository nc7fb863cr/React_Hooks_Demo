import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Board, ThemeCard } from '../../components/Components';
import { ThemeProvider } from '../../functions/Functions';

const Screen = ( props ) => { 
  const { params } = props.route;
  const { title, description } = params;

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Board title={title} description={description}/>        
        <ThemeCard/>
      </View>
    </ThemeProvider>
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
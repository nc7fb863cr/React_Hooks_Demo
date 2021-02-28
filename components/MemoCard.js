import React from 'react';
import { Text, StyleSheet } from 'react-native';

import showMessage from '../functions/Toast';

const Card = ({ count }) => {
  return (
    <Text style={styles.title}><Title/>{count}</Text>
  )
}

const Title = () => {
  console.log('Memo card title is rendered!');
  showMessage('Memo card title is rendered!');
  return <Text style={styles.title}>Current Value:</Text>    
}

const styles = StyleSheet.create({
  title:{   
    marginHorizontal:20,
    fontSize: 20,    
  },
  value:{
    fontSize: 20,    
  }
})

export default Card;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Board = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal:20,
    marginBottom:30,
  },
  title:{
    fontSize: 22,
    fontWeight:'bold',
    marginBottom:5,
  },
  description:{
    fontSize: 16,
    opacity: 0.56,
  }
})

Board.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Board;
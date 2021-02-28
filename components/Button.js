import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ content, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.6}>
      <Text style={styles.content}>{content}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    marginVertical: 15,
    marginHorizontal: 20,
    backgroundColor:'white',
    paddingVertical: 20,
    paddingHorizontal: 35,
    borderRadius:15,
    ...Platform.select({
      ios:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
      },
      android:{
        elevation:10,
      }
    }),
  },
  content:{
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf:'center',
  }
});

Button.propTypes = {
  content: PropTypes.string,
  onPress: PropTypes.func,
}

export default Button;
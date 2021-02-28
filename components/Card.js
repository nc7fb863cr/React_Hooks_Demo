import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';

const Card = ( props ) => {
  const navigation = useNavigation();
  const { title, description, page } = props;

  const navigate = () => {
    if ( page ) {
      navigation.navigate( page, {title, description} );
    }
  }

  return (
    <TouchableOpacity style={styles.card} onPress={navigate}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <AntDesign name='right' style={styles.icon}/>
      </View>
    </TouchableOpacity>
  )
} 

const styles = StyleSheet.create({
  card:{
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor:'white',
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
  container:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:10,
    paddingHorizontal:15,
    justifyContent:'space-between',
  },
  titleContainer:{
    flex: 1,
    marginRight: 10,    
  },
  title:{
    fontSize: 22,
    fontWeight:'bold',
    marginBottom:5,
  },
  description:{
    fontSize: 16,
    opacity: 0.56,
  },
  icon:{
    color: 'dodgerblue',
    fontSize: 30,
    opacity: 0.8,
  }
})

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  page: PropTypes.string,
}

export default Card;
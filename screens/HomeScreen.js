import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { Card } from '../components/Components';
import { Categories } from '../constants/Constants';

const HomeScreen = ( props ) => {  
  const renderCards = () => {
    return Categories.map(item => {
      return (
        <Card 
          key={Math.random().toString()}
          title={item.title} 
          description={item.description}
          page={item.page}/>
      )
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {renderCards()}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  }
})

export default HomeScreen;
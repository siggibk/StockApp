import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return(
    <View style={styles.header}>
      <Text style={styles.title}>
        Stock Lookup
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop:22
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'rgb(107,50,50)'
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  }
});

export default Header;
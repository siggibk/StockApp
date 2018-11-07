import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class StockItem extends React.Component {
    render() {
      return (
          <View style={styles.item}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{uri: 'https://storage.googleapis.com/iex/api/logos/AAPL.png'}}
            />
            
            <Text style={styles.symbol}>Symbol</Text>
            <Text style={styles.price}>24.7</Text>
          </View>
          
      )
    }
  }
  
const styles = StyleSheet.create({
  item: {
    marginTop:22,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    
  },
  symbol: {
    fontSize: 16,
    color: 'rgb(107,50,50)'
  },
  price: {
    paddingLeft:10,
    fontSize: 14,
  }
});

export default StockItem;
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class StockItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.symbolContainer}>
          <Text style={styles.symbol}>Symbol</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>24.8</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1
  },
  symbol: {
    fontSize: 16
  },
  price: {
    fontSize: 14
  },
  symbolContainer: {
    color: "#2982b8",
    borderWidth: 1
  },
  priceContainer: {
    borderWidth: 1,
    //textAlign: "right",
    justifyContent: "flex-end"
  }
});

export default StockItem;

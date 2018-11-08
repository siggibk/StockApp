import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class StockItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.symbolContainer}>
          <Text style={styles.symbol}>AAPL</Text>
          <Text style={styles.companyName}>Apple inc.</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>24.8</Text>
          <Text style={{ color: "green" }}>4%</Text>
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
    fontSize: 18,
    fontWeight: "bold"
  },
  price: {
    fontSize: 18
  },
  companyName: {
    fontStyle: "italic"
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

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class StockItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: "",
      companyName: "",
      changePercent: 0.0,
      latestPrice: 0.0,
      gained: false
    };
  }
  static navigationOptions = {
    title: "Welcome"
  };
  handleSymbolSearch = symbolChar => {
    const { navigate } = this.props.navigation;
    //s
    const stock = { symbol: symbolChar };
    console.log("clicking Most indexed companie");
    navigate("Stock", stock);
  };

  componentDidMount() {
    const {
      symbol,
      companyName,
      changePercent,
      latestPrice
    } = this.props.stock;
    var gained = parseFloat(changePercent) < 0 ? false : true;

    this.setState({
      symbol: symbol,
      companyName: companyName,
      changePercent: parseFloat(changePercent) * 100,
      latestPrice: latestPrice,
      gained: gained
    });
  }

  render() {
    //const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={() => this.handleSymbolSearch(this.state.symbol)}
      >
        <View style={styles.container}>
          <View style={styles.symbolContainer}>
            <Text style={styles.symbol}>{this.state.symbol}</Text>
            <Text style={styles.companyName}>{this.state.companyName}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text
              style={[
                styles.price,
                this.state.gained ? styles.priceGain : styles.priceLoss
              ]}
            >
              {this.state.latestPrice}
            </Text>
            <Text>Day chg: {this.state.changePercent.toFixed(2)}%</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingBottom: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#C8C8C8"
  },
  symbol: {
    fontSize: 18,
    fontWeight: "bold"
  },
  price: {
    fontSize: 18,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 10
  },
  priceGain: {
    backgroundColor: "#55AE3A"
  },
  priceLoss: {
    backgroundColor: "#EE6363"
  },
  companyName: {
    fontStyle: "italic"
  },
  symbolContainer: {
    color: "#2982b8"
    //borderWidth: 1
  },
  priceContainer: {
    //borderWidth: 1,
    //textAlign: "right",
    justifyContent: "flex-end"
  }
});

export default StockItem;

import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default class StockScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: {}
    };
  }
  static navigationOptions = {
    title: "Stocks",
    headerStyle: {
      backgroundColor: "#2982b8"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  getPrice() {
    fetch("https://api.iextrading.com/1.0/stock/aapl/price")
      .then(response => response.json())
      .then(responseJson => {
        console.log("here" + responseJson);
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    console.log("getting it: " + this.getPrice());
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExdpoLinksViehw ansd replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <Text>Stock screen</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

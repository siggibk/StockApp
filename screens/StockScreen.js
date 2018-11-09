import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default class StockScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyInfo: {}
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.symbol}`,
    headerStyle: {
      backgroundColor: "#2982b8"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  });

  getCompanyInfo = async symbol => {
    console.log(symbol);
    const url = "https://api.iextrading.com/1.0/stock/" + symbol + "/company";
    //const url = "https://api.iextrading.com/1.0/stock/market/news/last/5";
    try {
      let response = await fetch(url);
      let responseJson = await response.json();

      return new Promise(function(resolve, reject) {
        //console.log(responseJson[0]);
        resolve(responseJson);
      });
    } catch (error) {
      console.log("ERROR HERE");
      console.error(error);
    }
  };

  componentDidMount() {
    console.log(this.props);

    const { symbol } = this.props.navigation.state.params;

    this.getCompanyInfo(symbol).then(data =>
      this.setState({ companyInfo: data })
    );
  }

  render() {
    //console.log("getting it: " + this.getPrice());
    return (
      <ScrollView style={styles.container}>
        <Text>{this.state.companyInfo.symbol}</Text>
        <Text>{this.state.companyInfo.companyName}</Text>
        <Text>{this.state.companyInfo.CEO}</Text>
        <Text>{this.state.companyInfo.industry}</Text>
        <Text>{this.state.companyInfo.description}</Text>
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

import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";

import StockItem from "../components/StockItem";

import NewsList from "../components/NewsList";
import StockList from "../components/StockList";

//const dataService = require("../services/IEXservice");

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      news: [],
      stocks: []
    };
  }
  static navigationOptions = {
    title: "Stock lookup",
    headerStyle: {
      backgroundColor: "#2982b8"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  handleSymbolSearch = symbol => {
    console.log("Searching for symbol info..");

    const stock = { symbol: symbol };
    this.props.navigation.navigate("Stock", stock);
  };

  getLast5News = async () => {
    const url = "https://api.iextrading.com/1.0/stock/market/news/last/5";
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

  getTopStocks = async () => {
    var stocks = ["aapl", "fb", "tsla", "msft"];
    var stocksData = [];

    for (var symbol of stocks) {
      const url = "https://api.iextrading.com/1.0/stock/" + symbol + "/quote";
      console.log(url);
      try {
        let response = await fetch(url);
        let responseJson = await response.json();

        stocksData.push(responseJson);
      } catch (error) {
        console.log("ERROR HERE");
        console.error(error);
      }
    }

    return new Promise(function(resolve, reject) {
      //console.log(responseJson[0]);
      resolve(stocksData);
    });
  };

  componentWillMount() {
    console.log("Fetching news..");
    this.getLast5News().then(data => this.setState({ news: data }));
    console.log("Fetching stocks..");
    this.getTopStocks().then(data => this.setState({ stocks: data }));

    //console.log(this.state.news);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <TextInput
            placeholder="Ex. aapl"
            style={styles.textInput}
            onChangeText={text => this.setState({ text })}
          />
          <Button
            style={styles.button}
            onPress={() => this.handleSymbolSearch(this.state.text)}
            color="#2982b8"
            title="Search"
          />
          <View style={styles.stockItems}>
            <Text style={styles.ItemsTitle}>Most indexed companies</Text>
            <StockList
              navigation={this.props.navigation}
              stocks={this.state.stocks}
            />
          </View>
          <View style={styles.newsItems}>
            <Text style={styles.ItemsTitle}>Latest market news</Text>
            <NewsList news={this.state.news} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  button: {
    padding: 5,
    height: 30
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30,
    paddingLeft: 5,
    paddingRight: 5
  },
  textInput: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1.5,
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 10,
    borderColor: "#668B8B"
  },
  stockItems: {},
  ItemsTitle: {
    fontSize: 22,
    paddingTop: 20,
    paddingBottom: 1,
    marginBottom: 8,
    //borderBottomWidth: 1,
    color: "#2982b8"
  }
});

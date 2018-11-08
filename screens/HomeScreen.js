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
  Button
} from "react-native";

import Header from "../components/Header";
import StockItem from "../components/StockItem";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Placeholder" };
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

  handleSymbolSearch = () => {
    console.log("Searching for symbol info..");
    this.props.navigation.navigate("Stock");
  };

  componentWillMount() {
    // maybe get a couple of stocks to show on the home screen?
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <TextInput placeholder="Ex. aapl" style={styles.textInput} />
          <Button
            style={styles.button}
            onPress={this.handleSymbolSearch}
            color="#2982b8"
            title="Search"
          />
          <View style={styles.stockItems}>
            <Text style={styles.stockItemsTitle}>Most indexed companies</Text>
            <StockItem />
            <StockItem />
            <StockItem />
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
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 10
  },
  stockItems: {},
  stockItemsTitle: {
    fontSize: 22,
    paddingTop: 10
  }
});

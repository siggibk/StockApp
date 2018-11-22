import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  ActivityIndicator
} from "react-native";

import CompanyInfo from "../components/CompanyInfo";

export default class StockScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyInfo: {},
      logoUrl: "placeholder",
      price: 0,
      companyInfoLoaded: false,
      logoUrlLoaded: false,
      priceLoaded: false
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.symbol}`.toUpperCase(),
    headerStyle: {
      backgroundColor: "#1A4971"
    },
    headerTintColor: "#EFF8FF",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  });

  getDataByUrl = async url => {
    try {
      let response = await fetch(url).catch(function() {});
      let responseJson;
      try {
        responseJson = await response.json();
      } catch (error) {
        console.log("symbol does not exist");
      }

      return new Promise(function(resolve, reject) {
        resolve(responseJson);
      });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    console.log(this.props);

    const { symbol } = this.props.navigation.state.params;

    url = "https://api.iextrading.com/1.0/stock/" + symbol + "/company";
    this.getDataByUrl(url).then(data =>
      this.setState({ companyInfo: data, companyInfoLoaded: true })
    );

    var url = "https://api.iextrading.com/1.0/stock/" + symbol + "/logo";
    this.getDataByUrl(url).then(data =>
      this.setState({ logoUrl: data.url, logoUrlLoaded: true })
    );

    url = "https://api.iextrading.com/1.0/stock/" + symbol + "/price";
    this.getDataByUrl(url).then(data =>
      this.setState({ price: data, priceLoaded: true })
    );

    //url =
  }

  render() {
    return (
      <ScrollView style={styles.scrollViewContainer}>
        {this.state.companyInfoLoaded &&
        this.state.logoUrlLoaded &&
        this.state.priceLoaded ? (
          <CompanyInfo
            companyInfo={this.state.companyInfo}
            price={this.state.price}
            logoUrl={this.state.logoUrl}
          />
        ) : (
          <ActivityIndicator size="large" color="#2982b8" />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
    padding: 26
  },
  companyLogo: {
    flex: 10,
    width: 125,
    height: 125
  },
  companyName: {
    flex: 2,
    margin: 10,
    backgroundColor: "white"
  },
  companyPrice: {
    flex: 2,
    margin: 10,
    backgroundColor: "white"
  },
  companyType: {
    flex: 2,
    margin: 3,
    backgroundColor: "white"
  },
  companyCEO: {
    flex: 2,
    margin: 3,
    backgroundColor: "white"
  },
  companyInformation: {
    padding: 1,
    flex: 8,
    backgroundColor: "white"
  },
  companyPriceText: {
    fontSize: 14,
    color: "green"
  },
  companyInformationText: {
    fontSize: 15
  },
  companyNameText: {
    fontSize: 21,
    fontWeight: "bold"
  },
  mediumInfoText: {
    fontSize: 18
  }
});

import React from "react";
import { ScrollView, StyleSheet, Text, Image, View } from "react-native";

export default class StockScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyInfo: {},
      logoUrl: "placeholder",
      price: 0
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.symbol}`.toUpperCase(),
    headerStyle: {
      backgroundColor: "#2982b8"
    },
    headerTintColor: "#fff",
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
        responseJson = "placeholder";
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
    this.getDataByUrl(url).then(data => this.setState({ companyInfo: data }));

    var url = "https://api.iextrading.com/1.0/stock/" + symbol + "/logo";
    this.getDataByUrl(url).then(data => this.setState({ logoUrl: data.url }));

    url = "https://api.iextrading.com/1.0/stock/" + symbol + "/price";
    this.getDataByUrl(url).then(data => this.setState({ price: data }));
  }

  render() {
    if (this.state.logoUrl != "placeholder" && this.state.logoUrl != null) {
      return (
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.container}>
            <View style={styles.companyLogo}>
              <Image
                style={styles.companyLogo}
                source={{ uri: this.state.logoUrl }}
              />
            </View>
            <View style={styles.companyName}>
              <Text style={styles.companyNameText}>
                {this.state.companyInfo.companyName}
              </Text>
            </View>
            <View style={styles.companyPrice}>
              <Text style={styles.companyPriceText}>{this.state.price}</Text>
            </View>
            <View style={styles.companyInformation}>
              <Text style={styles.companyInformationText}>
                {this.state.companyInfo.description}
              </Text>
              <View style={styles.companyCEO}>
                <Text style={styles.mediumInfoText}>
                  CEO: {this.state.companyInfo.CEO}
                </Text>
              </View>
              <View style={styles.companyType}>
                <Text style={styles.mediumInfoText}>
                  Type of industry: {this.state.companyInfo.industry}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    } else {
      return <Text style={styles.mediumInfoText}>Comany does not exists</Text>;
    }
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class CompanyInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      description: "",
      CEO: "",
      industry: "",
      logoUrl: "https://via.placeholder.com/150.png",
      price: 0,
      companyFinancials: {}
    };
  }

  componentDidMount() {
    const { companyName, description, CEO, industry } = this.props.companyInfo;
    const { price, logoUrl } = this.props;

    this.setState({
      companyName: companyName,
      description: description,
      CEO: CEO,
      logoUrl: logoUrl,
      industry: industry,
      price: price
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.companyHeader}>
          <View style={styles.companyLogo}>
            <Image
              style={styles.companyLogo}
              source={{
                uri: this.state.logoUrl
              }}
            />
          </View>
          <Text style={styles.companyNameText}>{this.state.companyName}</Text>
          <View style={styles.companyPrice}>
            <Text style={styles.companyPriceText}>
              Current price: {this.state.price}
            </Text>
          </View>
          <View style={styles.companyCEO}>
            <Text style={styles.mediumInfoText}>Ceo: {this.state.CEO}</Text>
          </View>
          <View style={styles.companyType}>
            <Text style={styles.mediumInfoText}>
              Industry: {this.state.industry}
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.companyInformation}>
          <Text style={styles.companyInformationText}>
            {this.state.description}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1
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
  companyHeader: {
    flex: 2,
    marginTop: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  companyPrice: {
    flex: 2,
    margin: 2,
    backgroundColor: "white"
  },
  companyType: {
    flex: 2,
    margin: 2,
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
    fontSize: 16
  },
  companyInformationText: {
    fontSize: 15
  },
  companyNameText: {
    fontSize: 21,
    fontWeight: "bold"
  },
  mediumInfoText: {
    fontSize: 14,
    fontStyle: "italic"
  },
  sectionTitle: {
    fontSize: 22,
    paddingTop: 20,
    paddingBottom: 1,
    marginBottom: 8,
    //borderBottomWidth: 1,
    color: "#1A4971"
  }
});

export default CompanyInfo;

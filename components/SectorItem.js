import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class SectorItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateTime: null,
      headline: null,
      source: null
    };
  }

  componentDidMount() {
    /*const { datetime, headline, source } = this.props.news;

    this.setState({
      dateTime: datetime,
      headline: headline,
      source: source
    });
    */
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headlineContainer}>
          <Text style={styles.headline}> Communication Services </Text>
          <Text style={styles.performance}> 1.2 </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 15,
    paddingBottom: 8,
    flexDirection: "row",
    //justifyContent: "space-between",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#C8C8C8"
  },
  performance: {
    fontWeight: "bold",
    fontSize: 12
  },
  headline: {
    fontSize: 16
  }
});

export default SectorItem;

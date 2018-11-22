import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

/*
    Attributes that news item will have:
        datetime
        headline
        source
        url
        summary
        related
        image

*/

class NewsItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateTime: null,
      headline: null,
      source: null
    };
  }

  componentDidMount() {
    const { datetime, headline, source } = this.props.news;

    this.setState({
      dateTime: datetime.substring(0, 10),
      headline: headline,
      source: source
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headlineContainer}>
          <Text style={styles.date}> {this.state.dateTime} </Text>
          <Text style={styles.headline}> {this.state.headline} </Text>
          <Text style={styles.source}>Source: {this.state.source}</Text>
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
    //flexDirection: "row",
    //justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#C8C8C8"
  },
  date: {
    fontWeight: "bold",
    fontSize: 12
  },
  headline: {
    fontSize: 16
  },
  source: {
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

export default NewsItem;

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class SectorItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      performance: 0.0,
      gained: false
    };
  }

  componentDidMount() {
    const { name, performance } = this.props.sector;
    var gained = parseFloat(performance) < 0 ? false : true;

    this.setState({
      name: name,
      performance: performance * 100,
      gained: gained
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headlineContainer}>
          <Text style={styles.headline}> {this.state.name} </Text>
        </View>
        <View style={styles.performanceContainer}>
          <Text style={styles.performance} />
          <Text
            style={[
              styles.performance,
              this.state.gained ? styles.sectoreGain : styles.sectorLoss
            ]}
          >
            {" "}
            {this.state.performance.toFixed(2)}%{" "}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    //alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#C8C8C8"
  },
  performance: {
    fontWeight: "bold",
    fontSize: 14,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 10
  },
  headline: {
    fontSize: 16
  },
  headlineContainer: {
    //flexDirection: "row"
  },
  performanceContainer: {
    justifyContent: "flex-end"
  },
  sectoreGain: {
    backgroundColor: "#55AE3A"
  },
  sectorLoss: {
    backgroundColor: "#EE6363"
  }
});

export default SectorItem;

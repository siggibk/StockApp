import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class FinancialInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      marketcap: 0,
      EBITDA: 0,
      revenue: 0,
      grossProfit: 0,
      cash: 0,
      debt: 0,
      profitMargin: 0,
      week52high: 0,
      week52low: 0
    };
  }

  componentDidMount() {
    const {
      marketcap,
      EBITDA,
      revenue,
      grossProfit,
      cash,
      debt,
      profitMargin,
      week52high,
      week52low
    } = this.props.financials;

    this.setState({
      marketcap: marketcap,
      EBITDA: EBITDA,
      revenue: revenue,
      grossProfit: grossProfit,
      cash: cash,
      debt: debt,
      profitMargin: profitMargin,
      week52high: week52high,
      week52low: week52low
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Key statistics</Text>
        <View style={styles.statContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.statName}>Market cap</Text>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.valueName}>{this.state.marketcap}</Text>
          </View>
        </View>

        <View style={styles.statContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.statName}>EBITDA</Text>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.valueName}>{this.state.EBITDA}</Text>
          </View>
        </View>

        <View style={styles.statContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.statName}>Revenue</Text>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.valueName}>{this.state.revenue}</Text>
          </View>
        </View>

        <View style={styles.statContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.statName}>Gross profit</Text>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.valueName}>{this.state.grossProfit}</Text>
          </View>
        </View>

        <View style={styles.statContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.statName}>Cash</Text>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.valueName}>{this.state.cash}</Text>
          </View>
        </View>

        <View style={styles.statContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.statName}>Debt</Text>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.valueName}>{this.state.profitMargin}</Text>
          </View>
        </View>

        <View style={styles.statContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.statName}>52 week high</Text>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.valueName}>{this.state.week52high}</Text>
          </View>
        </View>

        <View style={styles.statContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.statName}>52 week low</Text>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.valueName}>{this.state.week52low}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
    padding: 26
  },
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: "#C8C8C8"
  },
  statName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  valueName: {
    fontSize: 16,
    fontStyle: "italic"
  },
  sectionTitle: {
    fontSize: 22,
    paddingBottom: 1,
    marginBottom: 8,
    //borderBottomWidth: 1,
    color: "#1A4971"
  },
  valueContainer: {
    //borderWidth: 1,
    //textAlign: "right",
    justifyContent: "flex-end"
  }
});

export default FinancialInfo;

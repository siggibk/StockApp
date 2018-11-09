import React from "react";
import { FlatList, StyleSheet } from "react-native";
import SectorItem from "./SectorItem";

const SectorList = ({ sectors }) => (
  <FlatList
    style={styles.container}
    data={sectors}
    renderItem={({ item }) => <SectorItem sector={item} />}
    keyExtractor={(item, index) => index.toString()}
  />
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5"
  }
});
export default SectorList;

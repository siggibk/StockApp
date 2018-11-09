import React from "react";
import { FlatList } from "react-native";
import StockItem from "./StockItem";

const StockList = ({ navigation, stocks }) => (
  <FlatList
    data={stocks}
    renderItem={({ item }) => (
      <StockItem navigation={navigation} stock={item} />
    )}
    keyExtractor={(item, index) => index.toString()}
  />
);
export default StockList;

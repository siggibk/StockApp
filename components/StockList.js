import React from "react";
import { FlatList } from "react-native";
import StockItem from "./StockItem";

const StockList = ({ stocks }) => (
  <FlatList
    data={stocks}
    renderItem={({ item }) => <StockItem stock={item} />}
    keyExtractor={(item, index) => index.toString()}
  />
);
export default StockList;

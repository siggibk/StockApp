import React from "react";
import { FlatList } from "react-native";
import NewsItem from "./NewsItem";

const NewsList = ({ news }) => (
  <FlatList
    data={news}
    renderItem={({ item }) => <NewsItem news={item} />}
    keyExtractor={(item, index) => index.toString()}
  />
);
export default NewsList;

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ListItem, { Seperator } from "../components/ListItem";

const PasswordList = (props) => {
  const removePasswordHandler = (key) => {
    props.deleteItem(key);
  };
  const ITEM_HEIGHT = 80;
  return (
    <FlatList
      data={props.list}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          app={item.app}
          userName={item.userName}
          password={item.password}
          onDelete={removePasswordHandler.bind(this, item.id)}
        />
      )}
      ItemSeparatorComponent={() => <Seperator />}
      getItemLayout={(data, index) => (
        {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
      )}
      />
  );
};

const styles = StyleSheet.create({});

export default PasswordList;

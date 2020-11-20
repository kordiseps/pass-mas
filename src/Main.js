import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, ClippingRectangle } from "react-native";
import Header from "./components/Header";
import PasswordList from "./screens/PasswordList";
import AddPassword from "./screens/AddPassword";
import Color from "./modules/globalColors";
import Preferences from "./modules/preferences";
import PasswordContext from "./modules/PasswordContext";

export default function Main() {
  const dbManager = new PasswordContext();
  const [isAdd, setIsAdd] = useState(false);
  const [passwordList, setPasswordList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const colorTheme =
    Preferences.theme === 1 ? Color.lightTheme : Color.darkTheme;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingTop: 20,
      backgroundColor: colorTheme.backColor,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });

  const SaveDataHandler = (data) => {
    dbManager.insert(data);
    ReloadData();
    setIsAdd(false);
  };

  const SaveCancelHandler = () => {
    setIsAdd(false);
  };

  const createDb = () => {
    dbManager.createDb();
  };

  const ReloadData = () => {
    if (searchText.length > 0) {
      console.log('aranana kelime' , searchText)
      dbManager.find(searchText, (result) => setPasswordList(result));
    } else {
      dbManager.select((result) => setPasswordList(result));
    }
    console.log("Data Reloaded.");
  };

  const DeleteData = (id) => {
    dbManager.delete(id);
    ReloadData();
  };
  const onSearch = (appName) => {
    setSearchText(appName);
    ReloadData();
  };

  useEffect(() => {
    createDb();
    ReloadData();
  }, []);

  return (
    <View style={styles.container}>
      <Header totalCount={passwordList.length} searchAppName={onSearch} />
      <AddPassword
        visible={isAdd}
        onAdd={SaveDataHandler}
        onCancel={SaveCancelHandler}
      />
      <PasswordList list={passwordList} deleteItem={DeleteData} />
      <Button
        title="Parola Ekle"
        color={colorTheme.okButtonColor}
        onPress={() => setIsAdd(true)}
      />
    </View>
  );
}

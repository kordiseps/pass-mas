import React, { useState } from "react";
import { Alert, Button, Modal, StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import Color from '../modules/globalColors';
import Preferences from '../modules/preferences';

const AddPassword = (props) => {
  const [app, setApp] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const colorTheme = Preferences.theme===1? Color.lightTheme : Color.darkTheme;

  const styles = StyleSheet.create({
    screen: {
      backgroundColor:colorTheme.backColor,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "80%",
    },
    button: {
      width: "40%",
    },
    title: {
      fontSize: 24,
      color:colorTheme.mainColor,
    },
  });

  const addHandler = () => {
    if (app === "" || userName === "" || password === "") {
      Alert.alert(
        "Eksik alan!",
        "Kayıt için tüm alanları doldurunuz.",
        [{ text: "Tamam", onPress: () => {} }],
        { cancelable: false }
      );
      return;
    }
    props.onAdd({
      app: app,
      userName: userName,
      password: password,
    });
  };
  const cancelHandler = () => {
    props.onCancel();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <Text style={styles.title}>Yeni Parola Kaydet</Text>
        <Input placeholder="Uygulama" setText={setApp} />
        <Input placeholder="Kullanıcı Adı" setText={setUserName} />
        <Input placeholder="Şifre" setText={setPassword} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Ekle" color={colorTheme.okButtonColor}  onPress={addHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Vazgeç" color={colorTheme.cancelButtonColor} onPress={cancelHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};


export default AddPassword;

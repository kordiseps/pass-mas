import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";
import Main from "./src/Main";
import Preferences from "./src/modules/preferences";

export default function App() {
  const statusBarStyle = Preferences.theme === 1 ? "auto" : "inverted";
  const bgColor = Preferences.theme === 1 ? "white" : "black";
  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex:1, paddingTop: 20,backgroundColor:bgColor }}>
        <StatusBar style={statusBarStyle} />
        <Main />
      </SafeAreaView>
    // </TouchableWithoutFeedback>
  );
}

import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Color from "../modules/globalColors";
import Preferences from "../modules/preferences";

const Input = (props) => {
  const [text, setText] = useState("");
  const handleSetText = (value) => {
    setText(value);
    props.setText(value);
  };
  const colorTheme =
    Preferences.theme === 1 ? Color.lightTheme : Color.darkTheme;

  const styles = StyleSheet.create({
    inputContainer: {
      width: "80%",
      padding: 12,
      borderColor: colorTheme.borderColor,
      borderWidth: 1,
      marginVertical: 10,
      borderRadius:10,
    },
    input: {
      fontSize: 16,
      color: colorTheme.mainColor,
    },
  });
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor ={colorTheme.passiveColor}
        value={text}
        onChangeText={handleSetText}
      />
    </View>
  );
};

export default Input;

import React, { version } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Color from "../modules/globalColors";
import Preferences from "../modules/preferences";
import AppLogo from "./AppLogo";
import PasswordContext from "../modules/PasswordContext";

const Header = (props) => {
  const dbManager = new PasswordContext();
  const colorTheme =
    Preferences.theme === 1 ? Color.lightTheme : Color.darkTheme;

  const styles = StyleSheet.create({
    headerContainer: {
      width: "100%",
      height: 50,
      backgroundColor: colorTheme.backDarkerColor,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    imageContainer: {
      width: "50%",
      height: "80%",
    },
    searchContainer: {
      width: "30%",
      height: "80%",
      borderWidth: 1,
      borderColor: colorTheme.borderColor,
      borderRadius: 10,
      justifyContent: "center",
      // flexDirection:"row",
    },
    buttonContainer: {
      width: "10%",
      height: "80%",
      justifyContent: "center",
      flexDirection: "row",
      alignContent: "space-around",
    },
    tinyLogo: {
      width: "100%",
      height: "100%",
      resizeMode: "stretch",
    },
    searchBar: {
      marginLeft: 10,
      color: colorTheme.mainColor,
    },
    text: {
      color: colorTheme.mainColor,
    },
    buttonText: {
      // backgroundColor:'green',
      fontSize: 28,
      fontWeight: "bold",
      color: colorTheme.mainColor,
    },
    countContainer:{
      borderWidth:1,
      borderRadius:10,
      borderColor:colorTheme.mainColor,
      width:"8%",
      height:"50%",
      justifyContent:"center",
      alignItems:"center"

    }
  });
  const onMenu=()=>{
    dbManager.insert({
      app: 'facebook',
      userName: 'user1',
      password: 'password1',
    });
    dbManager.insert({
      app: 'twitter',
      userName: 'user2',
      password: 'password2',
    });
    dbManager.insert({
      app: 'youtube',
      userName: 'user3',
      password: 'password3',
    });
    dbManager.insert({
      app: 'twitch',
      userName: 'user4',
      password: 'password4',
    });
    dbManager.insert({
      app: 'hepsiburada',
      userName: 'user5',
      password: 'password5',
    });
    dbManager.insert({
      app: 'n11',
      userName: 'user6',
      password: 'password6',
    });
    dbManager.insert({
      app: 'gmail',
      userName: 'user7',
      password: 'password7',
    });
    dbManager.insert({
      app: 'outlook',
      userName: 'user8',
      password: 'password8',
    });
    dbManager.insert({
      app: 'yandex.disk',
      userName: 'user9',
      password: 'password9',
    });
    dbManager.insert({
      app: 'yahoo',
      userName: 'user10',
      password: 'password10',
    });
    dbManager.insert({
      app: 'telegram',
      userName: 'user11',
      password: 'password11',
    });
  }

  const onChange=(text)=>{
    props.searchAppName(text)
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.imageContainer}>
        <AppLogo />
      </View>
      <View style={styles.countContainer}> 
        <Text 
          style={styles.text}
          >{props.totalCount}</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="ARA"
          placeholderTextColor={colorTheme.passiveColor}          
          onChangeText={text => onChange(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onMenu}>
          <Text style={styles.buttonText}>≡</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

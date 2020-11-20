import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Button,
  Animated,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Color from "../modules/globalColors";
import Preferences from "../modules/preferences";

export const Seperator = () => (
  <View
    style={{
      flex: 1,
      height: 1,
      backgroundColor: "#e4e4e4",
      marginLeft: 10,
    }}
  />
);
class ListItem extends React.PureComponent {
  render() {
    const deleteHandler = () => {
      Alert.alert(
        "Bu İşlem Geri Alınamaz",
        `${this.props.app} şifresi silinecek. Emin misiniz?`,
        [
          {
            text: "Vazgeç",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Onayla", onPress: () => this.props.onDelete() },
        ],
        { cancelable: false }
      );
    };

    const colorTheme =
      Preferences.theme === 1 ? Color.lightTheme : Color.darkTheme;

    const styles = StyleSheet.create({
      container: {
        backgroundColor: colorTheme.backColor,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
        height: 60,
      },
      appContainer: {
        flexDirection: "row",
        alignItems: "center",
      },
      dataContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "40%",
      },
      tinyLogo: {
        width: 35,
        height: 35,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: colorTheme.borderColor,
        marginRight: 10,
      },
      text: {
        fontSize: 24,
        color: colorTheme.mainColor,
        fontWeight: "500",
      },
      dataText: {
        fontSize: 16,
        color: colorTheme.mainColor,
      },
      leftActions: {
        backgroundColor: colorTheme.cancelButtonColor,
        justifyContent: "center",
        alignItems: "flex-start",
        margin: 2,
        borderRadius: 15,
        // height:55
      },
      leftActionsText: {
        color: "white",
        fontWeight: "600",
        padding: 15,
      },
    });

    const LeftActions = (progress, dragX) => {
      const scale = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 3],
        extrapolate: "clamp",
      });
      return (
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={deleteHandler}>
            <Animated.Text
              style={[styles.leftActionsText, { transform: [{ scale }] }]}
            >
              Sil
            </Animated.Text>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View style={styles.container}>
        <View style={{ width: "60%" }}>
          <Swipeable renderLeftActions={LeftActions}>
            <View style={styles.appContainer}>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/facebook.png")}
              />
              <Text style={styles.text}>{this.props.app}</Text>
            </View>
          </Swipeable>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.dataText}>{this.props.userName}</Text>
          <Text style={styles.dataText}>{this.props.password}</Text>
        </View>
      </View>
    );
  }
}

export default ListItem;

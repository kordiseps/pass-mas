import React from "react";
import { Image } from "react-native";
import * as Svg from "react-native-svg";
const {  SvgUri } = Svg;

export default function AppLogo() {
  return (
    // <SvgUri width="100%" height="100%" uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"/>
    <Image style={{width: "100%",height: "100%",}} source={require("../assets/logo.png")} />
  );
}

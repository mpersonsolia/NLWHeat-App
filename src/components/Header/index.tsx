import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

import LogoSvg from "../../assets/logo.svg";

export function Header() {
  return (
    <View style={styles.container}>
      <Text>Sair</Text>
    </View>
  );
}

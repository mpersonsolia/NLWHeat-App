import React from "react";
import { View } from "react-native";

import { COLORS } from "../../theme";
import { Button } from "../Button";
import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";

export function SignInBox() {
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        backgroundColor={COLORS.YELLOW}
        color={COLORS.BLACK_PRIMARY}
        icon="github"
        onPress={signIn}
        title="ENTRAR COM O GITHUB"
      />
    </View>
  );
}

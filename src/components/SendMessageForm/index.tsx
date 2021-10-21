import React, { useState } from "react";

import { TextInput, View } from "react-native";
import { COLORS } from "../../theme";
import { Button } from "../Button";

import { styles } from "./styles";

export function SendMessageForm() {
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        editable={!sendingMessage}
        keyboardAppearance="dark"
        maxLength={140}
        multiline
        onChangeText={setMessage}
        placeholder="Qual a sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        value={message}
      />

      <Button
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        title="Enviar Mensagem"
      />
    </View>
  );
}

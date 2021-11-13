import React from "react";
import { TextInput } from "react-native";

const Input = ({title , secure , correct , complete , value}) => {
    return (
        <TextInput
            style={{
              flex: 1,
              backgroundColor: "#F3F4F6",
              fontSize: 16,
              paddingVertical: 15,
              paddingHorizontal: 20,
              borderRadius: 10,
          fontWeight: "600",
              paddingRight: secure ? 45 : 20
            }}
            placeholder={title}
            secureTextEntry={secure}
            autoCorrect={correct}
            autoComplete={complete}
            onChangeText={value}
          />
    )
}

export default Input;
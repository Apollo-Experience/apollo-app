import react from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style.js";

const FbBtnLogin = ({ labelButton }) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <MaterialCommunityIcons
        style={styles.icon}
        name="facebook"
        color="white"
        size={24}
      />
      <Text style={styles.label}>{labelButton}</Text>
    </TouchableOpacity>
  );
};

export default FbBtnLogin;

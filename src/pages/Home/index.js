import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Logo from "../../assets/logo-apollo.svg";
import FbBtnLogin from "../../components/FbBtnLogin";
import GgBtnLogin from "../../components/GgBtnLogin";
import styles from "./style.js";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Logo width={240} height={80} fill={"white"} />
        <FbBtnLogin labelButton={"Entrar com facebook"} />
        <GgBtnLogin labelButton={"Fazer Login com Google"} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.version}>Versão: DEV-1.1.0</Text>
      </View>
    </View>
  );
}

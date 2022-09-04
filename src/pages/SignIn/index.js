import { TouchableOpacity, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Logo from "../../assets/logo-apollo.svg";
import GoogleLogo from "../../assets/google-icon.svg";
import styles from "./style.js";

function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Logo width={240} height={80} fill={"white"} />
        <TouchableOpacity
          style={styles.fbButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Home")}
        >
          <MaterialCommunityIcons
            style={styles.fbIcon}
            name="facebook"
            color="white"
            size={24}
          />
          <Text style={styles.fbLabel}>Entrar com facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.GoogleButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Home")}
        >
          <GoogleLogo />
          <Text style={styles.GoogleLabel}>Fazer login com Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.version}>Versão: DEV-1.0.3</Text>
      </View>
    </View>
  );
}

export default SignIn;

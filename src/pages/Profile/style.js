import { StyleSheet } from "react-native";
import AppStyles from "../../assets/AppStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colors.background_principal,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: AppStyles.colors.fonts,
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    height: 50,
  },
});

export default styles;

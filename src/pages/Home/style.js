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
    backgroundColor: AppStyles.colors.background_principal,
  },
  text: {
    color: AppStyles.colors.text_version,
    fontSize: 16,
    fontWeight: "600",
  },
  version: {
    color: "#c",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "right",
    marginRight: 10,
  },
  footer: {
    height: 50,
  },
});

export default styles;

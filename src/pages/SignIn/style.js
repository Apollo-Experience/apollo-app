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
  version: {
    color: AppStyles.colors.text_version,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "right",
    marginRight: 10,
  },
  footer: {
    height: 50,
  },
  fbButton: {
    width: 300,
    marginTop: 80,
    backgroundColor: "#4267B2",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  fbIcon: {
    marginRight: 12,
  },
  fbLabel: {
    color: AppStyles.colors.fonts,
    fontSize: 20,
    fontWeight: "700",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  GoogleButton: {
    width: 300,
    marginTop: 15,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  GoogleLabel: {
    marginLeft: 12,
    color: AppStyles.colors.text_version,
    fontSize: 20,
    fontWeight: "700",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;

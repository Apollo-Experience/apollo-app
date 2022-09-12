import { StyleSheet } from "react-native";
import AppStyles from "../../assets/AppStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: AppStyles.colors.background_principal,
    flex: 1,
  },
  text: {
    color: AppStyles.colors.fonts,
    fontSize: 16,
    fontWeight: "600",
  },
  titles: {
    color: AppStyles.colors.titles,
    fontSize: 26,
    fontFamily: "Roboto",
    fontWeight: "900",
    textAlign: "left",
    marginTop: 55,
    marginLeft: 35,
  },
  content: {
    paddingTop: 15,
  },
  footer: {
    height: 50,
  },
});

export default styles;

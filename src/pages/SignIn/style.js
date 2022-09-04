import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  version: {
    color: "#424242",
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
    color: "#FFF",
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
    color: "#4F4949",
    fontSize: 20,
    fontWeight: "700",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;

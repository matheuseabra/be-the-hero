import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerText: {
    fontSize: 15,
    color: "#737380"
  },

  headerTextBold: {
    fontWeight: "bold"
  },

  title: {
    fontSize: 30,
    color: "#737380",
    marginBottom: 16,
    marginTop: 48,
    color: "#13131a",
    fontWeight: "bold"
  },

  description: {
    fontSize: 16,
    color: "#737380",
    lineHeight: 24,
    marginBottom: 24
  },

  incidentList: {
    marginTop: 32
  },

  incidentItem: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },

  incidentKey: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
    textTransform: "uppercase"
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 16,
    marginBottom: 25,
    color: "#737380"
  },

  incidentDetailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  incidentDetailsButtonText: {
    color: "#e02041",
    fontSize: 15,
    fontWeight: "bold"
  }
});

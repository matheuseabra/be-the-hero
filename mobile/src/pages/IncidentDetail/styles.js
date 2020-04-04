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

  incidentItem: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginTop: 48,
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
    color: "#737380",
    fontWeight: "bold",
    textTransform: "uppercase"
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 16,
    marginBottom: 25,
    color: "#333"
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  action: {
    backgroundColor: "#e02041",
    borderRadius: 8,
    height: 50,
    width: "48%",
    justifyContent: "center",
    alignItems: "center"
  },

  actionText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold"
  },

  heroTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#13131a",
    lineHeight: 30
  },

  heroDescription: {
    marginTop: 16,
    fontSize: 15,
    color: "#737380"
  }
});

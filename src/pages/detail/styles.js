import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F9FF",
    paddingTop: 14,
    paddingEnd: 14,
    paddingStart: 14,
  },
  cover: {
    height: 200,
    width: "100%",
    borderRadius: 14,
  },
  playIcon: {
    position: "absolute",
    zIndex: 9,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  headerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  title: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 14,
    marginBottom: 4,
  },
  ingredientsText: {
    fontSize: 16,
  },
  instrucuionsArea: {
    backgroundColor: "#4cbe6c",
    flexDirection: "row",
    gap: 8,
    padding: 8,
    borderRadius: 6,
    marginBottom: 14,
  },
  instrucuionsText: {
    fontSize: 18,
    fontWeight: 500,
    color: "#fff",
  },
})

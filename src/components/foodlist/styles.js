import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
    position: "relative",
  },
  cover: {
    width: "100%",
    height: 200,
    borderRadius: 14,
  },
  info: {
    position: "absolute",
    bottom: 14,
    left: 14,
    zIndex: 99,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    color: "#fff",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: "55%",
    borderRadius: 14,
    zIndex: 1,
    backgroundColor: "transparent",
  },
})

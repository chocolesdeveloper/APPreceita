import { Text, View } from "react-native"

import { styles } from "./styles"

export function Ingredients({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Text>{data.amount}</Text>
    </View>
  )
}

import { Text, View } from "react-native"
import { styles } from "./styles"

export function Instructions({ data, index }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textIndex}>{index + 1} -</Text>
      <Text style={styles.textInstruction}>{data.text}</Text>
    </View>
  )
}

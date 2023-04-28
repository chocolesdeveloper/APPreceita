import { Text } from "react-native"
import { styles } from "./styles"

import { MotiView } from "moti"

export function Logo() {
  return (
    <MotiView
      style={styles.logoArea}
      from={{ opacity: 0, translateX: 50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{
        delay: 200,
        type: "timing",
        duration: 850,
      }}
    >
      <Text style={styles.logo}>Receita Fácil</Text>
    </MotiView>
  )
}

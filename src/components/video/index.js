import { Text, View, TouchableOpacity, SafeAreaView } from "react-native"
import { WebView } from "react-native-webview"

import { Feather } from "@expo/vector-icons"

import { styles } from "./styles"

export function VideoView({ handleClose, videoUrl }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleClose}>
        <Feather name="arrow-left" size={24} color="#fff" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
      <WebView style={styles.contentView} source={{ uri: videoUrl }} />
    </SafeAreaView>
  )
}

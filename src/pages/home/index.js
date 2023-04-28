import { useState, useEffect } from "react"

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native"

import { api } from "../../services/api"

import { Ionicons } from "@expo/vector-icons"
import { styles } from "./styles"
import { Logo } from "../../components/logo"
import { FoodList } from "../../components/foodlist"

import { useNavigation } from "@react-navigation/native"

import { MotiText } from "moti"

export function Home() {
  const [inputValue, setInputValue] = useState("")
  const [foods, setFoods] = useState([])

  const navigation = useNavigation()

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get("foods")
      setFoods(response.data)
    }

    fetchApi()
  }, [])

  function handleSearch() {
    if (!inputValue) return

    let input = inputValue

    setInputValue("")
    navigation.navigate("Search", { name: input })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <MotiText
        style={styles.title}
        from={{ opacity: 0, translateY: 15 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "spring",
          duration: 600,
        }}
      >
        Encontre a receita
      </MotiText>
      <MotiText
        style={styles.title}
        from={{ opacity: 0, translateY: 15 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          delay: 100,
          type: "spring",
          duration: 600,
        }}
      >
        que combina com você
      </MotiText>

      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome da receita"
          style={styles.input}
          value={inputValue}
          onChangeText={(value) => setInputValue(value)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#46BD6A" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={foods}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        contentContainerStyle={{ paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

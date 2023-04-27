import { useState, useEffect } from "react"
import { useRoute } from "@react-navigation/native"

import { View, FlatList, Text } from "react-native"
import { styles } from "./styles"

import { api } from "../../services/api"

import { FoodList } from "../../components/foodlist"

export function Search() {
  const [receipes, setReceipes] = useState([])

  const route = useRoute()

  useEffect(() => {
    async function fecthReceipes() {
      const response = await api.get(`/foods?name_like=${route.params?.name}`)
      setReceipes(response.data)
    }

    fecthReceipes()
  }, [route.params?.name])

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) =>
          item && item.item && <FoodList data={item.item} />
        }
        ListEmptyComponent={() => (
          <Text style={styles.text}>Não encontramos nada com esse nome 😢</Text>
        )}
      />
    </View>
  )
}

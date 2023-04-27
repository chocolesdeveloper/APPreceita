import { useLayoutEffect, useState } from "react"
import { useRoute, useNavigation } from "@react-navigation/native"

import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  Modal,
  Share,
} from "react-native"

import { styles } from "./styles"
import { Entypo, AntDesign, Feather } from "@expo/vector-icons"

import { isFavorite, saveFavorites, removeItem } from "../../utils/storage"

import { Ingredients } from "../../components/ingredients"
import { Instructions } from "../../components/instructions"
import { VideoView } from "../../components/video"

export function Detail() {
  const route = useRoute()
  const navigation = useNavigation()

  const [showVideo, setShowVideo] = useState(false)
  const [favorite, setFavorite] = useState(false)

  useLayoutEffect(() => {
    async function getStatusFavorites() {
      const receipeFavorite = await isFavorite(route.params?.data)

      setFavorite(receipeFavorite)
    }

    getStatusFavorites()

    navigation.setOptions({
      title: route.params?.data
        ? route.params?.data.name
        : "Detalhes da receita",
      headerRight: () => (
        <Pressable onPress={() => handleFavoriteReceipe(route.params?.data)}>
          {favorite ? (
            <Entypo name="heart" size={28} color="#FF4141" />
          ) : (
            <Entypo name="heart-outlined" size={28} color="#FF4141" />
          )}
        </Pressable>
      ),
    })
  }, [navigation, route.params?.data, favorite])

  async function handleFavoriteReceipe(receipe) {
    if (favorite) {
      await removeItem(receipe.id)
      setFavorite(false)
    } else {
      await saveFavorites("@appreceitas", receipe)
      setFavorite(true)
    }
  }

  function handleOpenVideo() {
    setShowVideo(true)
  }

  async function shareReceipe() {
    try {
      await Share.share({
        url: "https://www.youtube.com",
        message: `Receita de ${route.params?.data.name}\nIgredientes: ${route.params?.data.total_ingredients} \nVi lá no app receita facíl!`,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 14 }}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      <Pressable onPress={handleOpenVideo}>
        <View style={styles.playIcon}>
          <AntDesign name="playcircleo" size={48} color="#FAFAFA" />
        </View>
        <Image
          source={{ uri: route.params?.data.cover }}
          style={styles.cover}
        />
      </Pressable>

      <View style={styles.headerDetails}>
        <View>
          <Text style={styles.title}>{route.params?.data.name}</Text>
          <Text style={styles.ingredientsText}>
            Ingredientes ({route.params?.data.total_ingredients})
          </Text>
        </View>
        <Pressable onPress={shareReceipe}>
          <Feather name="share-2" size={24} color="#121212" />
        </Pressable>
      </View>

      {route.params?.data.ingredients.map((item, index) => (
        <Ingredients key={index} data={item} />
      ))}

      <View style={styles.instrucuionsArea}>
        <Text style={styles.instrucuionsText}>Modo de preparo</Text>
        <Feather name="arrow-down" size={24} color="#fff" />
      </View>

      {route.params?.data.instructions.map((item, index) => (
        <Instructions key={index} data={item} index={index} />
      ))}

      <Modal visible={showVideo} animationType="slide">
        <VideoView
          handleClose={() => setShowVideo(false)}
          videoUrl={route.params?.data.video}
        />
      </Modal>
    </ScrollView>
  )
}
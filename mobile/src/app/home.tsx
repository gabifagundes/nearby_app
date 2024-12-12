import { api } from "@/api";
import { Categories, CategoriesProps } from "@/components/categories";
import { Places } from "@/components/places";
import { PlaceItem } from "@/components/places/place";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps[]>([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [places, setPlaces] = useState<PlaceItem[]>([])

  async function fetchPlaces(){
    try{
      const {data} = await api.get(`/markets/category/${selectedCategory}`)
      setPlaces(data)
    }catch(error){
      console.log(error)
      Alert.alert('Ocorreu um erro ao buscar os lugares')
    }
  }

  async function fetchCategories(){
    try{
      const {data} = await api.get('/categories')
      setCategories(data)
      setSelectedCategory(data[0].id)
    }catch(error){
      console.log(error)
      Alert.alert('Ocorreu um erro ao buscar as categorias')
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(()=>{
    if(selectedCategory)
      fetchPlaces()
  },[selectedCategory])

  return (
    <View style={{ flex: 1, backgroundColor: '#f3dca1' }}>
      <Categories
      data={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={setSelectedCategory} />
      <Places data={places} />
    </View>
  );
}
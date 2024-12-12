import { styles } from "./styles";
import { Category } from "./category";
import { FlatList } from "react-native";

export type CategoriesProps = {
  id:string,
  name:string
}

type Props ={
  data: CategoriesProps[]
  selectedCategory:string,
  onSelectCategory:(categoryId:string) => void
}

export function Categories({ data,selectedCategory, onSelectCategory }:Props) {


  return (
    <FlatList data={data}
    keyExtractor={(item:CategoriesProps) => item.id}
    renderItem={({item})=><Category name={item.name} iconId={item.id} isSelected={item.id === selectedCategory} onPress={() => onSelectCategory(item.id)}/>}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.content}
    style={styles.container}
    />
  )
}
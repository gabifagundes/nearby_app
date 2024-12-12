import {Text, Pressable, PressableProps} from 'react-native'
import { styles } from './styles'
import { categoriesIcons } from '@/utils/categories-icons'
import {colors} from '@/styles/theme'
type Props = PressableProps & {
  iconId: string,
  isSelected?:boolean,
  name:string,
  onPress:()=>void
}

export function Category({name, iconId, isSelected, ...rest}:Props){

  const Icon = categoriesIcons[iconId]
  return(
    <Pressable style={[styles.container, isSelected && styles.containerSelected]} {...rest}>
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[styles.name, isSelected && styles.nameSelected]}>{name}</Text>
    </Pressable>
  )
}
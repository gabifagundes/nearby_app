import {TouchableOpacity,TouchableOpacityProps, Text, TextProps, View, ActivityIndicator} from 'react-native'
import {colors} from '@/styles/theme'
import { styles } from './styles'
import {Icon, LucideIcon, LucideProps} from 'lucide-react-native'

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}

 function Button({children, style,isLoading = false, ...rest}:ButtonProps){
  return <TouchableOpacity
  disabled={isLoading}
  activeOpacity={0.7}
  style={[styles.container, style]}
  {...rest}>
    {isLoading ? <ActivityIndicator size='small' color={colors.gray[100]}/> : children}
  </TouchableOpacity>
}

function Title({children, ...rest}:TextProps){
  return <Text style={styles.title} {...rest}>{children}</Text>;
}

type IconProps = {
  icon: React.ComponentType<LucideProps>
}
function IconComponent({icon: Icon}:IconProps){
return <Icon size={24} color={colors.gray[100]} />
}

Button.Title = Title
Button.Icon = IconComponent

export { Button }
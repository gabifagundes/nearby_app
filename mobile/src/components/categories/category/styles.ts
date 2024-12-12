import { StyleSheet } from "react-native";
import {colors,fontFamily} from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    height:36,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius:8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    gap:10
  },
  name: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
  containerSelected:{
    backgroundColor: colors.green.base,
    borderWidth: 0
  },
  nameSelected:{
    color: colors.gray[100]
  }
})
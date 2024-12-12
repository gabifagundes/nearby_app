import {Text, useWindowDimensions} from 'react-native'
import { useRef } from "react";
import { Place, PlaceItem } from "./place";
import BottomSheet,{ BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { styles } from './styles';

type Props={
  data:PlaceItem[]
}
export function Places({data}:Props) {
  const dimensions = useWindowDimensions()
  const bottomSheetRef = useRef<BottomSheet>(null);
const snapPoint ={
  min:278,
  max: dimensions.height - 200
}
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoint.min,snapPoint.max]}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.container}
      enableOverDrag={false}
      >
      <BottomSheetFlatList
      data={data}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=><Place data={item}/>}
      contentContainerStyle={styles.content}
      ListHeaderComponent={()=><Text style={styles.title}>Explore locais perto de você</Text>}
      showsVerticalScrollIndicator
      />
    </BottomSheet>
  )
}
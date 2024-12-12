import { Text, View } from "react-native";

import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


export default function Index() {

  return (
    <View style={{ flex: 1, justifyContent:'flex-start', padding: 40, gap: 40 }}>
      <Welcome/>
      <Steps/>
      {/* <Text>Homee</Text> */}
    </View>
  );
}
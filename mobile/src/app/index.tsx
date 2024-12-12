import { Text, View } from "react-native";

import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";
import { Button } from "@/components/button";
import { ScanQrCode } from "lucide-react-native";
import { navigate } from "expo-router/build/global-state/routing";
import { router } from "expo-router";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


export default function Index() {

  return (
    <View style={{ flex: 1, justifyContent:'flex-start', padding: 40, gap: 40 }}>
      <Welcome/>
      <Steps/>
      <Button onPress={()=> router.navigate('/home')}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}
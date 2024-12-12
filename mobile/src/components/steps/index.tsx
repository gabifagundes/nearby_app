import {View,Text} from 'react-native'
import {styles} from './styles'
import { Step } from '../step'
import { MapPinPlus, ScanQrCode, Ticket  } from 'lucide-react-native'

export function Steps(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona</Text>
      <Step
      icon={MapPinPlus}
      title="Encontre estabelecimentos"
      description="Veja locais perto de você que são parceiros Nearby"
      />
      <Step
      icon={ScanQrCode}
      title="Ative o cupom com QR Code"
      description="Escaneie o código no estabelecimento para usar o benefício"
      />
      <Step
      icon={Ticket}
      title="Garanta vantagens perto de você"
      description="Ative cupons onde estiver, em diferentes tipos de estabelecimento "
      />
    </View>
  )
}
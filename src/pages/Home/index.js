import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from '../Home/style.js';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Login</Text>
      <Text style={styles.texto}>Testando esssa opção aqui</Text>
      <StatusBar style="auto" />
    </View>
  );
}

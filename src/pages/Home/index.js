import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Tela de Login</Text>
      <StatusBar style="auto" />
    </View>
  );
}

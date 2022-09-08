import { Text, View } from "react-native";
import BannerCarrousel from "../../components/Banner";
import styles from "./style";

export default Dashboard = ({ navigation }) => {
  {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.titles}>Destaques</Text>
          <View style={styles.content}>
            <BannerCarrousel />
          </View>
        </View>
      </View>
    );
  }
};

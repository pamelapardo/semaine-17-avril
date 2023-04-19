import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.titleText}>User's to do list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: 'orange',
    flex: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 27,
    fontWeight: 700,
  }
});

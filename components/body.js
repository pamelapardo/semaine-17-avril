import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

export default function Header() {
  return (
    <View style={styles.containerBody}>

      <ScrollView style={styles.content}>
        <View style={styles.cardComponent}>
          <Text style={styles.textCard}>This is a card component. Do this.</Text>
        </View>
      </ScrollView>
  </View>

  );
}

const styles = StyleSheet.create({
  containerBody: {
    flex: 7,
    justifyContent: "space-between"
  },
  content: {
    flexDirection: "column",
    height: '50%',
    margin: 15 ,
  },
  cardComponent: {
    flex: 1,
    padding: 20,
    borderWidth: 3,
    borderColor: 'orange',
    borderRadius: 10,
    backgroundColor: "#292929",
    marginBottom: 10,
  },
  textCard: {
    color: "orange",
  }
});

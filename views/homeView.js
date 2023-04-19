import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import Header from '../components/header';
import Body from '../components/body'
import { Button } from 'react-native-paper';
import { useState } from 'react';

export default function HomeView ({navigation}) {
  
  const [addTodo, setAddTodo] = useState('')

  const addTextHandler = (textAddTodo) => {
    setAddTodo (textAddTodo)
  }

  const chageTodoHandler = () => {
    console.log(addTodo)
  }


  return (
    <PaperProvider>
      <View style={styles.container}>

        <Header/>

        <View style={styles.inputContainer}>
          <TextInput onChangeText={addTextHandler} theme={{ colors: { primary: 'orange', onSurfaceVariant: '#e8e8e8' } }} style={styles.inputStyle} placeholder='Write your task here...'/>
          <Button onPress={chageTodoHandler} icon="arrow-down-bold-box" labelStyle={{ fontSize: 45, color: 'orange' }}/>
        </View>

        <Body/>

      </View>
      <View style={styles.buttomNav}>
        <Button onPress={() => {navigation.navigate('SaveView')}} style={{flex: 1, marginRight: 7, height: 40}} mode="contained" buttonColor='#4a4a4a'>Accueil</Button>
        <Button onPress={() => {navigation.navigate('ProfilView')}} style={{flex: 1, marginLeft: 7, height: 40}} mode="contained" buttonColor='#4a4a4a'>Profil</Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#171717'
  },
  buttomNav: {
    height: '10%' ,
    backgroundColor: '#171717',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#171717',
    alignItems: 'flex-end',
    padding: 25,
  },
  btnStyle: {
    flex: 1,
    backgroundColor: '#4a4a4a',
    borderRadius: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle: {
    backgroundColor: '#171717',
    paddingTop: 7,
    flex: 1,
    marginLeft: 15,
  },
});

import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import Header from '../components/header';
import { Button } from 'react-native-paper';
import { useState, useEffect } from 'react';
import * as FileSystem from 'expo-file-system'

export default function HomeView({ navigation }) {
  //Ici en bas c'est une variable state pour le contenu du fichier .txt dont on a besoin pour pouvoir entrer une valeur et l'assigner à notre variable
  const [addTodo, setAddTodo] = useState('')
  //Ici en bas il y a une variable state pour le titre du fichier .txt dont on a besoin pour pouvoir entrer une valeur et l'assigner à notre variable
  const [addTitle, setAddTitle] = useState('')
  //Ici en bas il y a une variable state pour donner une valeur à la variable que je vais mettre en boucle pour lire.
  const [taskList, setTaskList] = useState([''])

  //J'ai créé un Handler pour que mon input de contenu puisse prendre la valeur saissi et l'inyecter dans le parametre textAddTodo
  const addTextHandler = (textAddTodo) =>setAddTodo(textAddTodo)

  //J'ai créé un Handler pour que mon input de titre puisse prendre la valeur saissi et l'inyecter dans le parametre thisTitle
  const changeTitleHandler = (thisTitle) => setAddTitle(thisTitle)

  // On fait une fonction async en tant que Handler qui se declanche après l'action du bouton ou on cherche: 
  const chageTodoHandler = async () => {
    try {
      // 1. Aller chercher dan le stockage du tel pour voir si le nom du fichier .txt existe déjà et on traduit les spaces par des _
      const titleUnderscore = addTitle.replace (/\s+/g, '_')
      const getFileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + `${titleUnderscore}.txt`)
      // Si l'information est trouvé je log quelle existe deja, donc on ne peut pas le creer.
      if (getFileInfo.exists) {
        console.log('it exists already')
      } else {
        //si elle n'exise pas: 2. Créer et ecrire le fichier texte avec la nouvelle valeur saisi dans les inputs (title et addTodo)
        const fileWritten = await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + `${titleUnderscore}.txt`, addTodo)
        console.log('fichier lu')
        //Apres l'avoir crée, un UseEffect qui attandait la creation du fichier met à jour la liste de taches.
        await dirListing();
      }
    } catch (error) {
      console.log('erreur non catche writefile: ', error)
    }
  }

  // Cette fonction créée pour son utilisation plus haut fait une liste de tous les taches ou fichier qui existent.
  const dirListing = async () => {
    const reading = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory)
    // on imprime cette liste avec un map ou on re remplace les _ par des espaces. On met a jour la variable setTasklist
    const formatReading = reading.map((task) => {
      return task.replace(/_/g, ' ')
    })
    setTaskList(formatReading);
  }

  //L'use effect qui met q joir lq liste en temps reel.

  useEffect(() => {
    dirListing()
  }, [])


  return (
    <PaperProvider>
      <View style={styles.container}>
        <Header />

        <View style={styles.inputContainer}>
          <View style={styles.inputItems}>
            <TextInput onChangeText={changeTitleHandler} theme={{ colors: { primary: 'orange', onSurfaceVariant: '#e8e8e8' }}} style={styles.inputStyle} placeholder='Title...' />
            <TextInput onChangeText={addTextHandler} theme={{ colors: { primary: 'orange', onSurfaceVariant: '#e8e8e8' } }} style={styles.inputStyle} placeholder='Write your task here...' />
          </View>
          <Button onPress={chageTodoHandler} icon="arrow-down-bold-box" labelStyle={{ fontSize: 45, color: 'orange' }} />
        </View>

        <View style={styles.containerBody}>

      <ScrollView style={styles.content}>
        {taskList.map((task, key) => {
          return (
            <View style={styles.cardComponent}>
              <Text key={key} style={styles.textCard}>
                {task}
              </Text>
            </View>
            )
        })}
      </ScrollView>
    </View>
      </View>
      <View style={styles.buttomNav}>
        <Button onPress={() => { navigation.navigate('ProfilView') }} style={{ flex: 1, marginLeft: 7, height: 40 }} mode="contained" buttonColor='#4a4a4a'>Profil</Button>
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
    height: '10%',
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
  inputItems: {
    flex: 1,
  },
  inputContainer: {
    flex: 2,
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

  // BODY VIEW -------------------------
  containerBody: {
    flex: 7,
    justifyContent: "space-between"
  },
  content: {
    flexDirection: "column",
    height: '50%',
    margin: 15,
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

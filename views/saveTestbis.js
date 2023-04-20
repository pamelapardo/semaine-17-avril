import { StyleSheet, View, Text, Button, TextInput, ScrollView } from "react-native";
import * as FileSystem from 'expo-file-system'
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SaveTestBis() {
  const [textAdded, setTextAdded] = useState('')
  const [addTitle, setAddTitle] = useState('')
  const [taskList, setTaskList] = useState([''])

  //On crée la tache ici
  const changetextHandler = (thisText) => {
    setTextAdded(thisText)
  }

  const changeAddedHandler = async () => {
    try {
      // On regarde oú
      const titleUnderscore = addTitle.replace (/\s+/g, '_')
      const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + `${titleUnderscore}.txt`)
      if (fileInfo.exists) {
        console.log('it exists already')
      } else {
        const fileWritten = await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + `${titleUnderscore}.txt`, textAdded)
        console.log('fichier lu')
        await dirListing();
      }
    } catch (error) {
      console.log('erreur non catche writefile util.js: ', error)
    }
  }

  //On cree le titre de la tache ici
  const changeTitleHandler = (thisTitle) => setAddTitle(thisTitle)

  const dirListing = async () => {
    const reading = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory)
    const formatReading = reading.map((task) => {
      return task.replace(/_/g, ' ')
    })
    setTaskList(formatReading);
  }

  useEffect(() => {
    dirListing()
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.saveContainer}>
      <TextInput onChangeText={changeTitleHandler} placeholder='Titre...' />
      <TextInput onChangeText={changetextHandler} placeholder='Tâche...' />
      <Button onPress={changeAddedHandler} title='Save' />
      {taskList.map((task, index) => {
       return ( 
       <Text key={index? index: 0}>
          {task}
        </Text>)
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  saveContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

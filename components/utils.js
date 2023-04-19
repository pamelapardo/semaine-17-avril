import * as FileSystem from 'expo-file-system'
import { readAsStringAsync } from 'expo-file-system'

export const writeFile = async (data) => {
  //verifier le contenu

  try{
    //verifier si le fichier est vide
    const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'file.txt')
    if (fileInfo.exists) {
      //si oui lire dans le fichier et recuperer les données existantes
      const fileContent = await readAsStringAsync(FileSystem.documentDirectory + 'file.txt')
      //trouver un moyen pour ajouter le contenu passe en param au contenu existant
      
    } else {
      //reecrire le contenu
      await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt')
    }
  } catch (error) {
    console.log ('Erreur non catche writeFile utils.js', error)
  }
  //si non recuperer les donnes
//yes
}
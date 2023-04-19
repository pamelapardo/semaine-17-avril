import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './views/homeView'
import ProfilView from './views/profilView';
import SaveTest from './views/saveTest';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Accueil' component={HomeView}/>
        <Stack.Screen name='ProfilView' component={ProfilView}/>
        <Stack.Screen name='SaveView' component={SaveTest}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
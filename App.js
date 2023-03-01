import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './routes/homeStack';
import AboutStack from './routes/aboutStack';


const Drawer = createDrawerNavigator();

export default function App() {


  return (
<NavigationContainer>
<Drawer.Navigator initialRouteName="Reviews" >
<Drawer.Screen name="Reviews" component={HomeStack} options={{headerShown:false}}  />
<Drawer.Screen name="About" component={AboutStack} options={{headerShown:false}} />
</Drawer.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

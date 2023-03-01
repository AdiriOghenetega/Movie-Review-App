import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from "../shared/header"
import About from '../screens/aboutscreen';

const Stack = createNativeStackNavigator();


export default function AboutStack() {

  return (

<Stack.Navigator initialRouteName="about" screenOptions= {({ navigation }) => {
      return {
        headerTitle: () => <Header title='About' navigation={navigation} />
      }
    }} >
<Stack.Screen name="about" component={About} />
</Stack.Navigator>

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

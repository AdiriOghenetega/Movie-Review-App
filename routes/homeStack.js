import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from "../shared/header"

import {Home,Details} from "../screens"

const Stack = createNativeStackNavigator();


export default function HomeStack() {



  return (

<Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle: { width: "100%", height: 60 }}}>
<Stack.Screen name="Home" component={Home} options= {({ navigation }) => {
      return {
        headerTitle: () => <Header title='Movie Reviews' navigation={navigation} />
      }
    }} />
<Stack.Screen name="Details" component={Details} />
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

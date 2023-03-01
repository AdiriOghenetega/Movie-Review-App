import { StyleSheet, Text, View,Image } from 'react-native';
import Card from "../shared/card"
import {rateImg} from "../assets/ratings"

export default function Details({route,navigation}) {
 
  const { title,body,rating } = route.params;

  return (
    <View style={styles.container}>
    <Card>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>Rating : </Text>
      <Card>
      <Image source={rateImg[rating]} />
      </Card>
    </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

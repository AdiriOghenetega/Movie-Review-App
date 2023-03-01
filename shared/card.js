import { StyleSheet, Text, View } from 'react-native';





export default function Card({children}) {


  return (
  <View style={styles.container}>
{children}
</View>
)
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 14,
    width : "100%",
    padding : 20

  },
});

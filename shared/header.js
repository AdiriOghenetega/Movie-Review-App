import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({title,navigation}) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
    <View style={styles.container}>
    <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
    <View style={styles.headerTitle}>
     <Image source={require("../assets/heart_logo.png")} style={styles.headerImage} />
      <Text style={styles.headerText}>{title}</Text>
    </View>
    </View>
    </ImageBackground>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent : "center",
    flexDirection: 'row',
    width : 360,
    height : "100%"
  },
  icon: {
    position : "absolute",
    left : 7
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
});

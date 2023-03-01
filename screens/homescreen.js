import { useState } from 'react';
import { TouchableWithoutFeedback,StyleSheet, Text, View,Modal,FlatList,TouchableOpacity,ImageBackground,Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Card from "../shared/card"
import ReviewModalScreen from "./reviewModalScreen"
import { globalStyles } from '../styles/globalStyles';

export default function Home({navigation}) {

  const [modalOpen,setModalOpen] = useState(false)

  const [review , setReview] = useState([
    {
      title: "Black Panther",
      body: "Not so good , too much drama for a superhero movie",
      rating: 2,
      key : 1
    },
    {
      title: "John Wick 3",
      body: "Great movie ,would recommend",
      rating: 5,
      key : 2
    },
    {
      title: "Ragnarok Anime",
      body: "good , too short",
      rating: 4,
      key : 3
    },
  
  ])

  function addReview(val){
    setReview(prev=>{
      return[
        {
          title: val.title,
          body: val.body,
          rating: val.rating,
          key: Math.random().toString()
        },
        ...prev
      ]
    })

  }

  function closeModal(){
    setModalOpen(false)
  }

  return (
    <View style={styles.container}>
    <Modal visible={modalOpen} animationType="slide">
   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={globalStyles.container}>
    <ImageBackground source={require("../assets/add_review_icon.png")} style={styles.modalToggle}>
    <MaterialIcons name="close" onPress={closeModal} size={25} style={{alignSelf:"center"}} />
    </ImageBackground>
    <ReviewModalScreen addReview={addReview} closeModal={closeModal} />
    </View>
   </TouchableWithoutFeedback>
    </Modal>
    
    <ImageBackground source={require("../assets/add_review_icon.png")} style={styles.modalToggle}>
    <MaterialIcons name="add" onPress={()=>setModalOpen(true)} size={25} />
    </ImageBackground>
      <FlatList 
       data={review}
       renderItem={
    ({ item }) =>( <TouchableOpacity onPress={() => navigation.navigate('Details',item)} style={styles.cardContainer}>
    <Card>
      <Text>{item.title}</Text>
    </Card>
    </TouchableOpacity>
    )
  }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer:{
    flex:1,
    flexDirection:"row"
  },
  modalToggle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    margin: 30
  }
});

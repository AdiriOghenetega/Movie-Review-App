import {StyleSheet} from "react-native"

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
input:{
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    fontSize: 18,
    borderRadius: 6,
    color:"gray"
},
errorText:{
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
}
})
import {
  StyleSheet
} from "react-native";

export default Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightskyblue",
    alignItems: "center",
    justifyContent: "center",
  },

  container2:{
  backgroundColor: "lightskyblue",
    alignItems: "center",
    justifyContent: "center",
    flex:1,
  },

  image: {
    marginBottom: 40,
    height: 200,
    width: 200,
    resizeMode: 'contain'
  },

   image2: {
    height: 75,
    width: 75,
    resizeMode: 'contain',
    justifyContent:"flex-start"

  },

  inputView: {
    backgroundColor: "lightcyan",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

   inputView2: {
    backgroundColor: "lightcyan",
    borderRadius: 30,
    width: "20%",
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  
  TextInput2: {
    height: 50,
  textAlign:'center',
  },

  forgot_button: {
    height: 30,
    marginBottom: 10,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "deepskyblue",
  },

  row:{
  flexDirection: 'row',
  justifyContent: 'center',
  },
  
  title:{
  marginTop:10,
  marginBottom:5
  },

  modbubble:{
  marginTop:10,
  width: 300,
  height: 30,
  justifyContent: "left",
  borderRadius: 60 / 2,
  backgroundColor: 'orange',
  },
  bubtext:{
  alignSelf: 'center',
  justifyContent: "center",
  fontWeight: 'bold',
  color: 'white',
  fontSize: 15,
  },
  langbubble:{
  marginTop:10,
  width: 300,
  height: 30,
  justifyContent: "left",
  borderRadius: 60 / 2,
  backgroundColor: 'lightgreen',
  },
  }
);
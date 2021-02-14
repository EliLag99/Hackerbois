import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightskyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 1,
    backgroundColor: 'lightskyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerExplore: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  image: {
    marginBottom: 40,
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },

  image2: {
    height: 75,
    width: 75,
    resizeMode: 'contain',
    justifyContent: 'flex-start',
  },

  inputView: {
    backgroundColor: 'lightcyan',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  inputView2: {
    backgroundColor: 'lightcyan',
    borderRadius: 30,
    width: '20%',
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
    textAlign: 'center',
  },

  forgot_button: {
    height: 30,
    marginBottom: 10,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'deepskyblue',
  },

  generalBtn: {
    width: '80%',
    borderRadius: 12.5,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, 
    marginBottom: 10,
    backgroundColor: 'deepskyblue',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  title: {
    marginTop: 10,
    marginBottom: 5,
  },

  captionBubble:{
    marginTop: 10,
    width: 300,
    height: 25,
    justifyContent: 'center',
    borderRadius: 60 / 2,
    backgroundColor: '#522719',
  },

    
  captionText: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },

  link: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  //FOR EXPLORE
  swiperContainer: {
    flex: 0.1,
  },

  bottomContainer: {
    flex: 0.9,
    justifyContent: 'space-evenly',
  },

  bottomContainerMeta: {
    alignContent: 'flex-end',
    alignItems: 'center',
  },

  bottomContainerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  cardImage: {
    width: 160,
    flex: 1,
    resizeMode: 'contain',
  },

  card: {
    flex: 0.45,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  text: {
    fontFamily: 'Courier',
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },

  done: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF',
    backgroundColor: 'transparent',
  },

  heading: { fontSize: 24, color: '#777777' },
});

export default Styles;

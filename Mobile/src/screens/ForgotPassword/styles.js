import {StyleSheet} from 'react-native';
//#3F3F3F
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7e57c2',
  },
  bodyContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 25,
  },
  titleText: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFF',

    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 15,
    paddingVertical: 35,
    marginHorizontal: 25,
    marginTop: 25,
  },
  cardText: {
    color: '#3F3F3F',
    fontSize: 20,

    marginBottom: 45,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#7e57c2',

    height: 50,

    paddingLeft: 50,
    fontSize: 16,

    borderRadius: 5,

    marginBottom: 45,
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7e57c2',
    borderRadius: 5,

    height: 50,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomText: {
    color: '#3F3F3F',
    fontSize: 18,

    marginVertical: 15,
  },
});
export default styles;

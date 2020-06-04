import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    marginHorizontal: 0,
  },
  bodyText: {
    fontSize: 24,
    fontWeight: 'bold',

    marginBottom: 30,
  },
  facebookButton: {
    backgroundColor: '#383FDB',

    borderRadius: 15,
    paddingHorizontal: 55,
    paddingVertical: 15,
  },
  loginButton: {
    backgroundColor: '#383FDB',

    height: 60,
    borderRadius: 15,

    marginBottom: 25,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25,
  },
  bottomContainer: {
    flexDirection: 'row',
  },
  bottomText: {
    fontSize: 18,
    color: '#000',
  },
  registerButtonText: {
    fontSize: 18,
    color: '#383FDB',
    fontWeight: 'bold',

    paddingLeft: 5,

    textDecorationLine: 'underline',
  },
  textInput: {
    height: 50,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'transparent',
    color: 'gray',

    borderColor: '#000',
    borderWidth: 2,
    marginHorizontal: 25,
    marginBottom: 36,
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 37,
  },
  buttonEye: {
    position: 'absolute',
    top: 10,
    right: 37,
  },
});
export default styles;

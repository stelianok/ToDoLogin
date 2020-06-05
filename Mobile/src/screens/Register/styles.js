import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  bodyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyText: {
    color: '#383FDB',
    fontSize: 24,
    fontWeight: 'bold',

    marginBottom: 30,
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 5,

    fontSize: 16,
    paddingLeft: 45,

    color: 'gray',

    marginHorizontal: 25,
    marginBottom: 20,
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 35,
  },
  eyeButton: {
    position: 'absolute',
    top: 10,
    right: 35,
  },
  signupButton: {
    backgroundColor: '#383FDB',

    height: 60,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 15,

    marginBottom: 25,
    marginTop: 15,
  },
  signupButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25,
  },
  facebookButton: {
    backgroundColor: '#4169e1',

    height: 60,
    borderRadius: 15,

    marginBottom: 25,

    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
  },
  facebookButtonText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFF',
  },
  loginText: {
    fontSize: 18,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#383FD8',
    fontWeight: 'bold',

    paddingLeft: 5,
    textDecorationLine: 'underline',
  },
});
export default styles;

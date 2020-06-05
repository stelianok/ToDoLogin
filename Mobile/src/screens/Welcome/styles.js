import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFDFE',
    flex: 1,
  },
  bodyContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    marginVertical: -120,
    marginHorizontal: 0,
  },
  bodyText: {
    fontSize: 24,
    fontWeight: 'bold',

    marginBottom: 30,
  },

  image: {
    width: 340,
    height: 400,
    resizeMode: 'contain',
    alignSelf: 'center',
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
  signupButton: {
    backgroundColor: '#383FDB',

    height: 60,
    borderRadius: 15,
    paddingHorizontal: 70,
    paddingVertical: 15,

    marginBottom: 25,

    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25,
  },
  bottomContainer: {
    flexDirection: 'row',
  },
  registerButtonText: {
    fontSize: 18,
    color: '#383FDB',
    fontWeight: 'bold',

    paddingLeft: 5,

    textDecorationLine: 'underline',
  },
});
export default styles;

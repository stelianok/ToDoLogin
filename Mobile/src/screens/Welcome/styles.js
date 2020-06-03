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
    backgroundColor: '#383FDB',

    borderRadius: 15,
    paddingHorizontal: 55,
    paddingVertical: 15,
  },
  signupButton: {
    backgroundColor: '#383FDB',

    borderRadius: 15,
    paddingHorizontal: 70,
    paddingVertical: 15,

    marginBottom: 25,
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

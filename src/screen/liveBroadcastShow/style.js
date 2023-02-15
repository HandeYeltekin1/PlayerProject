import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: '#003A59',
  },
  img: {
    marginTop: 10,
    flex: 1,
    resizeMode: 'stretch',
    height: 151,
    width: 98,
    marginEnd: 10,
    borderRadius: 30,
  },
  buttonlocation: {
    marginVertical: 1,
    marginHorizontal: 180,
    width: 20,
    height: 20,
  },
  text: {
    color: 'white',
    paddingStart: 10,
  },
  text2: {
    color: 'white',
    paddingTop: 20,
    paddingStart: 10,
  },
  text3: {
    color: '#81878C',
    paddingTop: 20,
    paddingStart: 10,
  },
  clock: {
    flexDirection: 'row',
  },
  button: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
  },
  frame: {
    // flexDirection: 'row',
    backgroundColor: '#002940',
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#81878C',
    height: 75,
    width: 300,
    left: 10,
    paddingTop: 10,
    marginTop: 5,
  },
});

export {styles};

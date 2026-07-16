import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    padding: 10,
  },

  display: {
    fontSize: 50,
    textAlign: 'right',
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
  },

  button: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: '#ddd',
    alignItems: 'center',
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 95,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#C6E6F1',
  },
  profileContent: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 26,
    fontWeight: 500,
    color: '#0B546C'
  }
});
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  contentContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  version:{
    color: '#424242',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'right',
    marginRight: 10
  },
  footer:{
    height: 50
  }
});

export default styles

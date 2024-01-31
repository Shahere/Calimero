import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Menu from './src/Menu';
import style from './styles/StyleApp.js'

export default function App() {

  function mainContent() {
    return <Menu></Menu>
  }

  return (
    <View style={style.content}>
      <View>
        {mainContent()}
      </View>
      <View style={style.navbar}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

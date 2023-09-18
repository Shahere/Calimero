import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Menu from './src/Menu';
import style from './styles/StyleApp.js'

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <StatusBar></StatusBar>
        <View style={style.header}>

        </View>
        <View style={style.content}>
          <Menu></Menu>
        </View>
      </View>
    </SafeAreaView>
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

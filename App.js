import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Menu from './src/Menu';
import style from './styles/StyleApp.js'

export default function App() {

  function mainContent() {
    return <Menu></Menu>
  }

  function home() {

  }

  return (
    <View style={style.content}>
      <View>
        {mainContent()}
      </View>
      <View style={style.navbar}>
        {/*------------------------------------------------------------------------------*/}
        <TouchableOpacity

          onPress={() => {
            home();
          }}>
          <View><Text>HOME</Text></View>
        </TouchableOpacity>
        {/*------------------------------------------------------------------------------*/}
        {/*------------------------------------------------------------------------------*/}
        <TouchableOpacity

          onPress={() => {
            home();
          }}>
          <View><Text>HOME</Text></View>
        </TouchableOpacity>
        {/*------------------------------------------------------------------------------*/}
        {/*------------------------------------------------------------------------------*/}
        <TouchableOpacity 

          onPress={() => {
            home();
          }}>
          <View><Text>HOME</Text></View>
        </TouchableOpacity>
        {/*------------------------------------------------------------------------------*/}
        {/*------------------------------------------------------------------------------*/}
        <TouchableOpacity

          onPress={() => {
            home();
          }}>
          <View><Text>HOME</Text></View>
        </TouchableOpacity>
        {/*------------------------------------------------------------------------------*/}
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

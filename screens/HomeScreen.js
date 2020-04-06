import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({navigation}) {

  return (
    <View style={styles.wrapper}>
      <View style={styles.innerContiner}>
          <TouchableOpacity onPress={handleHelpPress}>
            <Image
              source={ require('../assets/images/robot-dev.png')}
              style={styles.welcomeImage}
            />
          </TouchableOpacity>
        </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  innerContiner: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
});

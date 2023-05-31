import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import bgImg from './src/images/BG_img.jpg';
import Registarion from './src/Components/RegistrationScreen';
import LoginSreen from './src/Components/LogInSreen';
import Posts from './src/Components/PostsSreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImg} resizeMode="cover" style={styles.image}>
        {/* <Registarion /> */}
        {/* <LoginSreen /> */}
        <Posts />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    fontFamily: 'Roboto-Regular',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

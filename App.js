
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, Image, View, StatusBar, Container, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import themes from './assets/Themes/themes';
import { Profiles } from './assets/Themes';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes';

import { symbolicateLogLazy } from 'react-native/Libraries/LogBox/Data/LogBoxData';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  //should work on iphone pro max 13
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.topBar}>
        <Image style={styles.topIcon} source={(Icons.menu.light)} />
        <Text style={styles.appName}>
          ensom
        </Text>
        <Image style={styles.topIcon} source={Icons.sun} />
      </SafeAreaView>
      <View style={styles.outerview}>
        <ImageBackground style={styles.picture} source={Profiles.mtl.image} >
          <Text style={styles.name}>
            {Profiles.mtl.name}
          </Text>
          <Text style={styles.location}>
            {Profiles.mtl.caption}
          </Text>
        </ImageBackground>
        <View style={styles.box}>
          <View style={styles.textBox}>
            <Text style={styles.paragraph2}>
              My hottest take
            </Text>
          </View>
          <View style={styles.iconsP2}>
            <Image style={styles.icon1} source={(Icons.player.light)} />
            <Image style={styles.icon2} source={(Icons.audioWave.light)} />
          </View>
        </View>
      </View>
      <View style={styles.flexContainer1}>
        <View style={styles.navbarCoponent}>
          <Image style={styles.icon} source={Icons.discover.light} />
          <Text style={styles.paragraph}>
            Discover
          </Text>
        </View>
        <View style={styles.navbarCoponent}>

          <Image style={styles.icon} source={Icons.heart.light} />
          <Text style={styles.paragraph}>
            Matches
          </Text>
        </View>
        <View style={styles.navbarCoponent}>
          <Image style={styles.icon} source={Icons.messages.light} />
          <Text style={styles.paragraph}>
            DMs
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: Themes.light.bgSecondary,
    height: '18%',
    width: '100%',
    marginTop: 15,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    borderRadius: 10,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
  },
  textBox: {
    alignItems: 'flex-start',

  },
  paragraph2: {
    fontSize: 24,
    fontFamily: 'Sydney-Bold',
    color: 'black',
    flex: 1,
    paddingLeft: '3%',
    paddingTop: '14%',

  },
  iconsP2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon1: {
    marginRight: 8,
    resizeMode: 'contain',
    flex: 1,
  },
  icon2: {
    paddingLeft: '5%',
    resizeMode: 'contain',
    flex: 5,
  },
  outerview: {
    paddingLeft: '5%',
    paddingRight: '5%',
    height: '70%',
  },

  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  flexContainer1: {
    backgroundColor: Themes.light.navigation,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '10%',
    position: 'absolute',
    bottom: 0,
    flex: 1,
  },
  icon: {
    height: 40,
    width: 50,
    resizeMode: 'contain',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'

  },
  navbarCoponent: {
    alignItems: 'center',
  },
  picture: {
    aspectRatio: 1 / 1.1,
    resizeMode: 'contain',
    width: '100%',
    height: undefined,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
  },
  name: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    fontSize: 28,
    margin: 5,
    paddingLeft: '1%',
    paddingTop: '1%',
  },
  location: {
    color: Themes.light.textSecondary,
    fontFamily: 'Sydney',
    fontSize: 18,
    margin: 5,
    position: 'absolute',
    bottom: 0,
    paddingLeft: '1%',
    paddingBottom: '1%',
  },
  topBar: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  appName: {
    fontSize: 40,
    fontFamily: 'Sydney-Bold',
  },
  topIcon: {
    resizeMode: 'contain',
    height: '100%',
    width: '20%',
  }
});


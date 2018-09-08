import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
  asset,
  Environment
} from 'react-360';

export default class SphericalGallery extends React.Component {


  sceneImages = [
    'IMG_2510.JPG',
    'IMG_2137.JPG',
    'IMG_2116.JPG'
  ]

  setSceneBackground = sceneImg => {
    Environment.setBackgroundImage(asset(sceneImg))
  }

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.subPanel}>
          {this.sceneImages.map(sceneImage => (
            <VrButton style={styles.sceneButton} onClick={() => {
              this.setSceneBackground(sceneImage)
            }}>
              <Image style={styles.sceneImage} source={asset(sceneImage)}/>
            </VrButton>
          ))}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 4096,
    height: 520,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  subPanel: {
    flexDirection: 'row',
    width: 4096,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sceneButton: {
    width: 75,
    height: 75,
    backgroundColor: 'blue',
    marginLeft: 10,
    marginRight: 10
  },
  sceneImage: {
    width: 75,
    height: 75
  }
});

AppRegistry.registerComponent('SphericalGallery', () => SphericalGallery);

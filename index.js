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


  state = {
    currentSceneImage: 'IMG_2510.JPG'
  }

  sceneImages = [
    'IMG_2510.JPG',
    'IMG_2137.JPG',
    'IMG_2116.JPG',
    'goverla_falls.JPG'
  ]

  setSceneBackground = sceneImg => {
    this.setState({
      currentSceneImage: sceneImg
    })
    Environment.setBackgroundImage(asset(sceneImg))
  }

  getButtonStyle = sceneImg => {
    if (sceneImg === this.state.currentSceneImage)
      return styles.sceneButtonActive
    else
      return styles.sceneButton
  }

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.subPanel}>
          {this.sceneImages.map(sceneImage => (
            <VrButton key={sceneImage} style={this.getButtonStyle(sceneImage)} onClick={() => {
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


const sceneButton = {
  width: 75,
  height: 75,
  backgroundColor: 'blue',
  marginLeft: 10,
  marginRight: 10,
};

const sceneButtonActive = {
  ...sceneButton,
  borderWidth: 5,
  borderColor: 'yellow',
}

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
  sceneButton,
  sceneButtonActive,
  sceneImage: {
    flexGrow: 1
  }
});

AppRegistry.registerComponent('SphericalGallery', () => SphericalGallery);

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    VrButton
} from 'react-360';

export default class SphericalGallery extends React.Component {
    render() {
        return (
            <View style={styles.panel}>
                <View style={styles.subPanel}>
                    <VrButton style={styles.sceneButton} />
                    <VrButton style={styles.sceneButton} />
                    <VrButton style={styles.sceneButton} />
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
    }
});

AppRegistry.registerComponent('SphericalGallery', () => SphericalGallery);

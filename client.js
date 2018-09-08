// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';
import {Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const myCylSurface = new Surface(4096, 720, Surface.SurfaceShape.Cylinder)
  myCylSurface.setDensity(4096)

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('SphericalGallery', { /* initial props */ }), myCylSurface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('IMG_2510.JPG'));
}

window.React360 = {init};

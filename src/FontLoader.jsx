// FontLoader.js
import { useEffect } from 'react';
import WebFont from 'webfontloader';

function FontLoader() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins:300,400,500,600,700&display=swap'],
      },
    });
  }, []);

  return null; // This component doesn't render anything
}

export default FontLoader;

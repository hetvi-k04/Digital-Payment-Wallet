// src/reportWebVitals.js

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import 'web-vitals' and extract methods
    import('web-vitals').then((webVitals) => {
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals;
      if (getCLS && getFID && getFCP && getLCP && getTTFB) {
        // Call each of the web vitals with the provided callback
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      } else {
        console.error('Error: One or more web vitals functions are missing');
      }
    }).catch((error) => {
      console.error('Error loading web-vitals:', error);
    });
  }
};

export default reportWebVitals;

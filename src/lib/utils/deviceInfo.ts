// utils/deviceInfo.ts
export const getDeviceInfo = () => {
    const userAgent = navigator.userAgent;
  
    let deviceType = 'desktop';
    if (/Mobi|Android/i.test(userAgent)) {
      deviceType = 'mobile';
    } else if (/Tablet|iPad/i.test(userAgent)) {
      deviceType = 'tablet';
    }
  
    let browserName = 'Unknown';
    if (userAgent.indexOf('Chrome') > -1) {
      browserName = 'Chrome';
    } else if (userAgent.indexOf('Safari') > -1) {
      browserName = 'Safari';
    } else if (userAgent.indexOf('Firefox') > -1) {
      browserName = 'Firefox';
    } else if (userAgent.indexOf('MSIE') > -1) {
      browserName = 'Internet Explorer';
    }
  
    return {
      device_type: deviceType,
      browser_name: browserName,
    };
  };
  
// Google AdSense Auto Ads Injection
(function () {
  // Create and inject AdSense script
  var adsenseScript = document.createElement('script');
  adsenseScript.async = true;
  adsenseScript.src =
    'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7596549899792751';
  adsenseScript.crossOrigin = 'anonymous';

  // Insert script into head
  document.head.appendChild(adsenseScript);

  console.log('Google AdSense Auto Ads script loaded');
})();

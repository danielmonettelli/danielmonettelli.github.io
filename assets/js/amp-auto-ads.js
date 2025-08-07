// AMP Auto Ads - JavaScript injection
document.addEventListener('DOMContentLoaded', function () {
  // Only insert if AdSense is enabled and AMP is enabled
  if (
    typeof window.adsenseConfig !== 'undefined' &&
    window.adsenseConfig.enabled &&
    window.adsenseConfig.ampEnabled
  ) {
    // Create the amp-auto-ads element
    var ampAutoAds = document.createElement('amp-auto-ads');
    ampAutoAds.setAttribute('type', 'adsense');
    ampAutoAds.setAttribute('data-ad-client', window.adsenseConfig.clientId);

    // Insert after body (at the beginning of content)
    document.body.insertBefore(ampAutoAds, document.body.firstChild);
  }
});

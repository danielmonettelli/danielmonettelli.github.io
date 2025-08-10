// Google AdSense Auto Ads - FORZADO
(function () {
  console.log('🔥 INICIANDO CARGA DE ADSENSE...');

  // Verificar si ya existe el script
  const existingScript = document.querySelector(
    'script[src*="adsbygoogle.js"]'
  );
  if (existingScript) {
    console.log('✅ AdSense ya está cargado');
    return;
  }

  // Crear y añadir el script de AdSense
  const adsenseScript = document.createElement('script');
  adsenseScript.async = true;
  adsenseScript.src =
    'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7596549899792751';
  adsenseScript.crossOrigin = 'anonymous';

  // Añadir al head
  document.head.appendChild(adsenseScript);

  console.log('🎯 SCRIPT ADSENSE INYECTADO EXITOSAMENTE!');
  console.log('💰 Client ID: ca-pub-7596549899792751');

  // Verificar que se cargó
  adsenseScript.onload = function () {
    console.log('✅ ADSENSE CARGADO Y LISTO PARA MOSTRAR ANUNCIOS!');
  };

  adsenseScript.onerror = function () {
    console.error('❌ ERROR CARGANDO ADSENSE');
  };
})();
